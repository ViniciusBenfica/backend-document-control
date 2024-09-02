import cors from "cors";
import express from "express";
import { documentRouter } from "./routes/document/document.route";
import { enterpriseRouter } from "./routes/enterprise/enterprise.route";
import { enterpriseOnDocumentRouter } from "./routes/enterpriseOnDocument/enterpriseOnDocument.route";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use(enterpriseRouter);
app.use(documentRouter);
app.use(enterpriseOnDocumentRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
