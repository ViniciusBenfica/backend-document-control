import type { Request, Response } from "express";
import { findAllEnterpriseOnDocumentUseCase } from "../../../useCase/enterpriseOnDocument/findAll/findAll.enterpriseOnDocument.usecase";
import { findEnterpriseOnDocumentQueryParamUseCase } from "../../../useCase/enterpriseOnDocument/findWithParam/findWithParam.enterpriseOnDocument.usecase";

export async function findAllEnterpriseOnDocument(req: Request, res: Response) {
	const enterprise = await findAllEnterpriseOnDocumentUseCase();
	return res.status(201).json(enterprise);
}

export async function findEnterpriseOnDocumentQueryParam(req: Request, res: Response) {
	const query = req.query as { enterpriseId?: string };

	const enterpriseOnDocument = await findEnterpriseOnDocumentQueryParamUseCase(query);
	return res.status(201).json(enterpriseOnDocument);
}
