import cors from "cors";
import express from "express";
import { userRouter } from "./routes/user/user.route";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use(userRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
