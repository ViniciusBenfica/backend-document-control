import { Router } from "express";
import { createDocument, findAllDocument, updateDocument } from "./document.route.function";

export const documentRouter = Router();

documentRouter.post("/createDocument", createDocument);
documentRouter.get("/findAllDocument", findAllDocument);
documentRouter.put("/updateDocument/:id", updateDocument);
