import { Router } from "express";
import { createDocument } from "./document.route.function";

export const documentRouter = Router();

documentRouter.post("/createDocument", createDocument);
