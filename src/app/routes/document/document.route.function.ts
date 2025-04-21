import type { FastifyReply, FastifyRequest } from "fastify";
import { createDocumentUseCase } from "../../../useCase/document/create/create.document.usecase";
import { deleteDocumentUseCase } from "../../../useCase/document/delete/delete.document.usecase";
import { findDocumentUseCase } from "../../../useCase/document/find/find.document.usecase";
import { findAllDocumentUseCase } from "../../../useCase/document/findAll/findAll.document.usecase";
import { updateDocumentUseCase } from "../../../useCase/document/update/update.document.usecase";

interface CreateDocumentBody {
	title: string;
	description: string;
}

interface DocumentParams {
	id: string;
}

interface FindAllDocumentQuery {
	title?: string;
}

export async function createDocument(request: FastifyRequest<{ Body: CreateDocumentBody }>, reply: FastifyReply) {
	const { title, description } = request.body;
	const createDocumentDto = {
		title,
		description,
	};
	const document = await createDocumentUseCase(createDocumentDto);

	return reply.status(201).send(document);
}

export async function findAllDocument(request: FastifyRequest<{ Querystring: FindAllDocumentQuery }>, reply: FastifyReply) {
	const query = request.query;
	const document = await findAllDocumentUseCase(query);

	return reply.status(200).send(document);
}

export async function findDocument(request: FastifyRequest<{ Params: DocumentParams }>, reply: FastifyReply) {
	const { id } = request.params;
	const updateDocumentDto = {
		id,
	};

	try {
		const document = await findDocumentUseCase(updateDocumentDto);
		return reply.status(200).send(document);
	} catch (error) {
		if (error instanceof Error) {
			return reply.status(500).send({ error: error.message });
		}
		return reply.status(500).send({ error: "Unknown error" });
	}
}

export async function updateDocument(
	request: FastifyRequest<{ Params: DocumentParams; Body: CreateDocumentBody }>,
	reply: FastifyReply,
) {
	const { id } = request.params;
	const { title, description } = request.body;
	const updateDocumentDto = {
		id,
		title,
		description,
	};

	try {
		const document = await updateDocumentUseCase(updateDocumentDto);
		return reply.status(200).send(document);
	} catch (error) {
		if (error instanceof Error) {
			return reply.status(500).send({ error: error.message });
		}
		return reply.status(500).send({ error: "Unknown error" });
	}
}

export async function deleteDocument(request: FastifyRequest<{ Params: DocumentParams }>, reply: FastifyReply) {
	const { id } = request.params;
	const deleteDocumentDto = {
		id,
	};

	try {
		const document = await deleteDocumentUseCase(deleteDocumentDto);
		return reply.status(200).send(document);
	} catch (error) {
		if (error instanceof Error) {
			return reply.status(500).send({ error: error.message });
		}
		return reply.status(500).send({ error: "Unknown error" });
	}
}
