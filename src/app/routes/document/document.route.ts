import { Router } from "express";
import { createDocument, findAllDocument, findDocument, updateDocument } from "./document.route.function";

export const documentRouter = Router();

documentRouter.post("/createDocument", createDocument);
documentRouter.get("/findAllDocument", findAllDocument);
documentRouter.get("/findDocument/:id", findDocument);
documentRouter.put("/updateDocument/:id", updateDocument);
