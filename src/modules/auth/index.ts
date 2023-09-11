import { eq } from "drizzle-orm";
import Elysia, { t } from "elysia";
import { db } from "../../db";
import { users } from "../../db/schema";

export const auth = (app: Elysia) =>
	app.group("/auth", (app) =>
		app.post(
			"/signup",
			async ({ body, set }) => {
				const check = await db
					.select()
					.from(users)
					.where(eq(users.email, body.email));

				if (check.length > 0) {
					throw new Error("Same user already created.");
				}

				const hashedPassword = await Bun.password.hash(body.password);

				const res = await db.insert(users).values({
					email: body.email,
					name: body.name,
					password: hashedPassword,
					username: body.password,
				});

				set.status = 201;
				return {
					success: true,
					message: "User successfully created.",
					data: res,
				};
			},
			{
				body: t.Object({
					email: t.String({
						error: "Email is required",
						minLength: 1,
					}),
					username: t.String(),
					name: t.String(),
					password: t.String(),
				}),
			},
		),
	);
