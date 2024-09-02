import type { Request, Response } from "express";
import { findAllEnterpriseUseCase } from "../../../useCase/enterprise/findAll/findAll.enterprise.usecase";

export async function findAllEnterpriseOnDocument(req: Request, res: Response) {
	const enterprise = await findAllEnterpriseUseCase();
	return res.status(201).json(enterprise);
}
