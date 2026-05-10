import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const guesses = sqliteTable(
	"guesses",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		session_id: text("session_id").notNull(),
		politician_id: text("politician_id").notNull(),
		actual_party: text("actual_party").notNull(),
		guessed_party: text("guessed_party").notNull(),
		correct: integer("correct", { mode: "boolean" }).notNull(),
		created_at: integer("created_at", { mode: "timestamp_ms" }).notNull(),
	},
	(table) => [
		index("guesses_created_at_idx").on(table.created_at),
		index("guesses_session_id_idx").on(table.session_id),
		index("guesses_actual_party_idx").on(table.actual_party),
		index("guesses_politician_id_idx").on(table.politician_id),
	],
);

export type Guess = typeof guesses.$inferSelect;
export type NewGuess = typeof guesses.$inferInsert;
