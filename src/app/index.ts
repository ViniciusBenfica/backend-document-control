import cors from "@fastify/cors";
import fastify from "fastify";
import { documentRouter } from "./routes/document/document.route";
import { enterpriseRouter } from "./routes/enterprise/enterprise.route";
import { enterpriseOnDocumentRouter } from "./routes/enterpriseOnDocument/enterpriseOnDocument.route";

const app = fastify();
const port = Number(process.env.SERVER_PORT || 3000);

app.register(cors);

app.register(documentRouter);
app.register(enterpriseRouter);
app.register(enterpriseOnDocumentRouter);

const start = async () => {
	try {
		await app.listen({ port });
		console.log(`Server listening on port ${port}`);
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

start();
