import type { Request, Response } from "express";
import { findAllEnterpriseOnDocumentUseCase } from "../../../useCase/enterpriseOnDocument/findAll/findAll.enterpriseOnDocument.usecase";

export async function findAllEnterpriseOnDocument(req: Request, res: Response) {
	const query = req.query as {
		enterpriseId?: string;
		name?: string;
		cnpj?: string;
		title?: string;
		issueDate?: string;
		dueDate?: string;
	};

	const findAllEnterpriseOnDocumentDto = {
		issueDate: query.issueDate,
		dueDate: query.dueDate,
		enterprise: {
			id: query.enterpriseId,
			name: query.name,
			cnpj: query.cnpj,
		},
		document: {
			title: query.title,
		},
	};

	const enterprise = await findAllEnterpriseOnDocumentUseCase(findAllEnterpriseOnDocumentDto);
	return res.status(201).json(enterprise);
}
