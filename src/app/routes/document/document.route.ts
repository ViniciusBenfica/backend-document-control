import { Router } from "express";
import { createDocument, deleteDocument, findAllDocument, findDocument, updateDocument } from "./document.route.function";

export const documentRouter = Router();

documentRouter.post("/createDocument", createDocument);
documentRouter.get("/findAllDocument", findAllDocument);
documentRouter.get("/findDocument/:id", findDocument);
documentRouter.put("/updateDocument/:id", updateDocument);
documentRouter.delete("/deleteDocument/:id", deleteDocument);
