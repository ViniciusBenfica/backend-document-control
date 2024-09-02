import { Router } from "express";
import {findAllEnterpriseOnDocument } from "./enterpriseOnDocument.route.function";

export const enterpriseOnDocumentRouter = Router();

enterpriseOnDocumentRouter.get("/findAllEnterpriseOnDocument", findAllEnterpriseOnDocument);
