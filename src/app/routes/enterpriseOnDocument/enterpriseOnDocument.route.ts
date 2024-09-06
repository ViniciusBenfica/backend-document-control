import { Router } from "express";
import { findAllEnterpriseOnDocument, findEnterpriseOnDocumentQueryParam } from "./enterpriseOnDocument.route.function";

export const enterpriseOnDocumentRouter = Router();

enterpriseOnDocumentRouter.get("/findAllEnterpriseOnDocument", findAllEnterpriseOnDocument);
enterpriseOnDocumentRouter.get("/findEnterpriseOnDocument", findEnterpriseOnDocumentQueryParam);
