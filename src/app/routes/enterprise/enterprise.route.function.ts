import type { Request, Response } from "express";
import { createEnterpriseUseCase } from "../../../useCase/enterprise/create/create.enterprise.usecase";
import { deleteEnterpriseUseCase } from "../../../useCase/enterprise/delete/delete.enterprise.usecase";
import { findEnterpriseUseCase } from "../../../useCase/enterprise/find/find.enterprise.usecase";
import { findAllEnterpriseUseCase } from "../../../useCase/enterprise/findAll/findAll.enterprise.usecase";
import { updateEnterpriseUseCase } from "../../../useCase/enterprise/update/update.enterprise.usecase";

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

	try {
		const enterprise = await findEnterpriseUseCase(findEnterpriseDto);
		res.status(200).send(enterprise);
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).send({ error: error.message });
		}
	}
}

export async function updateEnterprise(req: Request, res: Response) {
	const { id } = req.params;
	const { name, cnpj, documents } = req.body;
	const updateEnterpriseDto = {
		id,
		name,
		cnpj,
		documents,
	};

	try {
		const enterprise = await updateEnterpriseUseCase(updateEnterpriseDto);
		res.status(200).send(enterprise);
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).send({ error: error.message });
		}
	}
}

export async function deleteEnterprise(req: Request, res: Response) {
	const { id } = req.params;
	const deleteEnterpriseDto = {
		id,
	};

	try {
		const enterprise = await deleteEnterpriseUseCase(deleteEnterpriseDto);
		res.status(200).send(enterprise);
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).send({ error: error.message });
		}
	}
}
