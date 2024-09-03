import { Router } from "express";
import { createDocument, findAllDocument } from "./document.route.function";

export const documentRouter = Router();

documentRouter.post("/createDocument", createDocument);
documentRouter.get("/findAllDocument", findAllDocument);
