import type { Request, Response } from "express";
import { createDocumentUseCase } from "../../../useCase/document/create/create.document.usecase";
import { deleteDocumentUseCase } from "../../../useCase/document/delete/delete.document.usecase";
import { findDocumentUseCase } from "../../../useCase/document/find/find.document.usecase";
import { findAllDocumentUseCase } from "../../../useCase/document/findAll/findAll.document.usecase";
import { updateDocumentUseCase } from "../../../useCase/document/update/update.document.usecase";

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

export async function findDocument(req: Request, res: Response) {
	const { id } = req.params;
	const updateDocumentDto = {
		id,
	};

	const document = await findDocumentUseCase(updateDocumentDto);

	return res.status(201).json(document);
}

export async function updateDocument(req: Request, res: Response) {
	const { id } = req.params;
	const { title, description } = req.body;
	const updateDocumentDto = {
		id,
		title,
		description,
	};
	const document = await updateDocumentUseCase(updateDocumentDto);

	return res.status(201).json(document);
}

export async function deleteDocument(req: Request, res: Response) {
	const { id } = req.params;
	const deleteDocumentDto = {
		id,
	};
	const document = await deleteDocumentUseCase(deleteDocumentDto);

	return res.status(201).json(document);
}
