import type { FastifyReply, FastifyRequest } from "fastify";
import { findAllEnterpriseOnDocumentUseCase } from "../../../useCase/enterpriseOnDocument/findAll/findAll.enterpriseOnDocument.usecase";

interface FindAllEnterpriseOnDocumentQuery {
	enterpriseId?: string;
	name?: string;
	cnpj?: string;
	title?: string;
	issueDate?: string;
	dueDate?: string;
}

export async function findAllEnterpriseOnDocument(
	request: FastifyRequest<{ Querystring: FindAllEnterpriseOnDocumentQuery }>,
	reply: FastifyReply,
) {
	const query = request.query;

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
	return reply.status(200).send(enterprise);
}
