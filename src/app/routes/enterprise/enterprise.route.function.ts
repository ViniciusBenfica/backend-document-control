import type { Request, Response } from "express";
import { createEnterpriseUseCase } from "../../../useCase/enterprise/create/create.enterprise.usecase";
import { findEnterpriseUseCase } from "../../../useCase/enterprise/find/find.enterprise.usecase";
import { findAllEnterpriseUseCase } from "../../../useCase/enterprise/findAll/findAll.enterprise.usecase";

export async function createEnterprise(req: Request, res: Response) {
	const { name, cnpj, documentId, issueDate, dueDate } = req.body;
	const createEnterpriseDto = {
		name,
		cnpj,
		documentId,
		issueDate,
		dueDate,
	};
	const enterprise = await createEnterpriseUseCase(createEnterpriseDto);
	return res.status(201).json(enterprise);
}

export async function findAllEnterprise(req: Request, res: Response) {
	const enterprise = await findAllEnterpriseUseCase();
	return res.status(201).json(enterprise);
}

export async function findEnterprise(req: Request, res: Response) {
	const { id } = req.params;
	const findEnterpriseDto = {
		id,
	};
	const enterprise = await findEnterpriseUseCase(findEnterpriseDto);
	return res.status(201).json(enterprise);
}
