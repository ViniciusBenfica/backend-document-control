import type { Request, Response } from "express";
import { createDocumentUseCase } from "../../../useCase/document/create.document.usecase";

export function createDocument(req: Request, res: Response) {
	const { titulo, description } = req.body;
	const createDocumentDto = {
		titulo,
		description,
	};
	const document = createDocumentUseCase(createDocumentDto);

	return res.status(201).json(document);
}
