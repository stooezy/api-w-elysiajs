import type { Config } from "drizzle-kit";

export default {
	schema: "./src/db/schema.ts",
	out: "./drizzle",
	driver: "mysql2",
	dbCredentials: {
		connectionString: "mysql://wsl_root:password@172.31.192.1:3306/elysia",
	},
} satisfies Config;
