import type { Request, Response } from "express";
import { findAllEnterpriseOnDocumentUseCase } from "../../../useCase/enterpriseOnDocument/findAll/findAll.enterpriseOnDocument.usecase";

export async function findAllEnterpriseOnDocument(req: Request, res: Response) {
	const enterprise = await findAllEnterpriseOnDocumentUseCase();
	return res.status(201).json(enterprise);
}
