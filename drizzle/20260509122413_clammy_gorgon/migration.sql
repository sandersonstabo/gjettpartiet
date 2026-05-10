CREATE TABLE `guesses` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`session_id` text NOT NULL,
	`politician_id` text NOT NULL,
	`actual_party` text NOT NULL,
	`guessed_party` text NOT NULL,
	`correct` integer NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `guesses_created_at_idx` ON `guesses` (`created_at`);--> statement-breakpoint
CREATE INDEX `guesses_session_id_idx` ON `guesses` (`session_id`);--> statement-breakpoint
CREATE INDEX `guesses_actual_party_idx` ON `guesses` (`actual_party`);--> statement-breakpoint
CREATE INDEX `guesses_politician_id_idx` ON `guesses` (`politician_id`);