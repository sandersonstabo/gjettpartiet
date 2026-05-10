import { Effect } from "effect";
import { get_statistics } from "$lib/server/statistics";

export const load = async () => {
	return {
		statistics: await Effect.runPromise(get_statistics),
	};
};
