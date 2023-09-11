import Elysia from "elysia";
import { handleError } from "./lib/error";
import { auth } from "./modules/auth";

const app = new Elysia()
	.onError((err) => handleError(err))
	.get("/", () => "Service Running")
	.group("/api", (app) => app.use(auth))
	.listen(9000);

console.log("Service Running");
