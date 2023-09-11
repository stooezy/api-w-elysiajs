import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";
import {
	datetime,
	mysqlTable,
	serial,
	text,
	varchar,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
	id: varchar("id", { length: 128 })
		.primaryKey()
		.$defaultFn(() => createId()),
	email: varchar("email", { length: 100 }),
	username: varchar("username", { length: 100 }),
	name: varchar("name", { length: 100 }),
	password: text("password"),
	createdAt: datetime("created_at").default(sql`now()`),
});
