import { sql } from "drizzle-orm";
import { Effect } from "effect";
import { party_tags, type PartyTag } from "$lib/data/parties";
import { db } from "$lib/server/db";
import { guesses } from "$lib/server/db/schema";

export type PartyAccuracy = {
	party: PartyTag;
	total: number;
	correct: number;
	accuracy: number;
};

export type ConfusionCell = {
	actual_party: PartyTag;
	guessed_party: PartyTag;
	total: number;
};

export type PoliticianStatistic = {
	politician_id: string;
	total: number;
	correct: number;
	accuracy: number;
};

export type Statistics = {
	total_guesses: number;
	correct_guesses: number;
	accuracy: number;
	politicians_seen: number;
	last_guess_at: Date | null;
	party_accuracy: PartyAccuracy[];
	confusion_matrix: ConfusionCell[];
	politician_statistics: PoliticianStatistic[];
};

const normalize_count = (value: unknown): number => Number(value ?? 0);

const get_overall = () =>
	Effect.promise(() =>
		db
			.select({
				total_guesses: sql<number>`count(*)`,
				correct_guesses: sql<number>`sum(case when ${guesses.correct} then 1 else 0 end)`,
				politicians_seen: sql<number>`count(distinct ${guesses.politician_id})`,
				last_guess_at: sql<number | null>`max(${guesses.created_at})`,
			})
			.from(guesses),
	);

const get_party_rows = () =>
	Effect.promise(() =>
		db
			.select({
				party: guesses.actual_party,
				total: sql<number>`count(*)`,
				correct: sql<number>`sum(case when ${guesses.correct} then 1 else 0 end)`,
			})
			.from(guesses)
			.groupBy(guesses.actual_party),
	);

const get_confusion_rows = () =>
	Effect.promise(() =>
		db
			.select({
				actual_party: guesses.actual_party,
				guessed_party: guesses.guessed_party,
				total: sql<number>`count(*)`,
			})
			.from(guesses)
			.groupBy(guesses.actual_party, guesses.guessed_party),
	);

const get_politician_rows = () =>
	Effect.promise(() =>
		db
			.select({
				politician_id: guesses.politician_id,
				total: sql<number>`count(*)`,
				correct: sql<number>`sum(case when ${guesses.correct} then 1 else 0 end)`,
			})
			.from(guesses)
			.groupBy(guesses.politician_id),
	);

export const get_statistics = Effect.gen(function* () {
	const [overall_rows, party_rows, confusion_rows, politician_rows] =
		yield* Effect.all([
			get_overall(),
			get_party_rows(),
			get_confusion_rows(),
			get_politician_rows(),
		]);

	const overall = overall_rows[0];

	const party_by_tag = new Map(
		party_rows.map((row) => {
			const total = normalize_count(row.total);
			const correct = normalize_count(row.correct);
			return [
				row.party as PartyTag,
				{
					party: row.party as PartyTag,
					total,
					correct,
					accuracy: total === 0 ? 0 : correct / total,
				},
			] as const;
		}),
	);

	const total_guesses = normalize_count(overall?.total_guesses);
	const correct_guesses = normalize_count(overall?.correct_guesses);

	return {
		total_guesses,
		correct_guesses,
		accuracy: total_guesses === 0 ? 0 : correct_guesses / total_guesses,
		politicians_seen: normalize_count(overall?.politicians_seen),
		last_guess_at: overall?.last_guess_at
			? new Date(Number(overall.last_guess_at))
			: null,
		party_accuracy: party_tags.map((party) =>
			party_by_tag.get(party) ?? { party, total: 0, correct: 0, accuracy: 0 },
		),
		confusion_matrix: confusion_rows.map((row) => ({
			actual_party: row.actual_party as PartyTag,
			guessed_party: row.guessed_party as PartyTag,
			total: normalize_count(row.total),
		})),
		politician_statistics: politician_rows.map((row) => {
			const total = normalize_count(row.total);
			const correct = normalize_count(row.correct);

			return {
				politician_id: row.politician_id,
				total,
				correct,
				accuracy: total === 0 ? 0 : correct / total,
			};
		}),
	};
});
