import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
	host: "172.31.192.1",
	user: "wsl_root",
	password: "password",
	database: "elysia",
	port: 3306,
});

export const db = drizzle(connection);
