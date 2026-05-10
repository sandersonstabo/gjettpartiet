import { drizzle } from "drizzle-orm/libsql";
import { env as private_env } from "$env/dynamic/private";
import * as schema from "$lib/server/db/schema";

const url = private_env.DATABASE_URL;
const auth_token =
	private_env.DATABASE_AUTH_TOKEN ??
	private_env.TURSO_AUTH_TOKEN;

if (!url) {
	throw new Error("DATABASE_URL is not set");
}

if (url.startsWith("libsql://") && !auth_token) {
	throw new Error("DATABASE_AUTH_TOKEN is not set");
}

export const db = drizzle({
	connection: {
		url,
		authToken: auth_token,
	},
	schema,
});
