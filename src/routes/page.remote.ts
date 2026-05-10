import { Command } from "svelte-effect-runtime/v4";
import { Effect, HashMap, Option, Random, Schema } from "effect";
import { party_tags } from "$lib/data/parties";
import { PoliticianIds, Politicians } from "$lib/data/politicians";
import { db } from "$lib/server/db";
import { guesses } from "$lib/server/db/schema";

export const random_politician = Command(() =>
    Effect.gen(function* () {
        const index = yield* Random.nextIntBetween(0, PoliticianIds.length - 1);
        return yield* HashMap.get(Politicians, PoliticianIds[index]);
    }),
);

export const guess_politician = Command(
    Schema.Struct({
        politician: Schema.Literals(PoliticianIds),
        party: Schema.Literals(party_tags),
    }),
    ({ politician, party }) =>
        Effect.gen(function* () {
            return yield* Option.match(HashMap.get(Politicians, politician), {
                onNone: () => Effect.succeed({
                    correct: false,
                }),
                onSome: (p) =>
                    Effect.promise(async () => {
                        const correct = p.party === party;
                        await db.insert(guesses).values({
                            session_id: crypto.randomUUID(),
                            politician_id: p.id,
                            actual_party: p.party,
                            guessed_party: party,
                            correct,
                            created_at: new Date(),
                        });

                        return { correct };
                    }),
            });
        }),
);
