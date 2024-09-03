import type { Request, Response } from "express";
import { createDocumentUseCase } from "../../../useCase/document/create/create.document.usecase";
import { findAllDocumentUseCase } from "../../../useCase/document/findAll/findAll.document.usecase";

export async function createDocument(req: Request, res: Response) {
	const { title, description } = req.body;
	const createDocumentDto = {
		title,
		description,
	};
	const document = await createDocumentUseCase(createDocumentDto);

	return res.status(201).json(document);
}

export async function findAllDocument(req: Request, res: Response) {
	const document = await findAllDocumentUseCase();

	return res.status(201).json(document);
}
