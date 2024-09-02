import type { Request, Response } from "express";
import { createDocumentUseCase } from "../../../useCase/document/create.document.usecase";

export async function createDocument(req: Request, res: Response) {
	const { title, description } = req.body;
	const createDocumentDto = {
		title,
		description,
	};
	const document = await createDocumentUseCase(createDocumentDto);

	return res.status(201).json(document);
}
