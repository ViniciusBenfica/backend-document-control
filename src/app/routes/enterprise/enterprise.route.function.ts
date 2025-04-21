import type { FastifyReply, FastifyRequest } from "fastify";
import { createEnterpriseUseCase } from "../../../useCase/enterprise/create/create.enterprise.usecase";
import { deleteEnterpriseUseCase } from "../../../useCase/enterprise/delete/delete.enterprise.usecase";
import { findEnterpriseUseCase } from "../../../useCase/enterprise/find/find.enterprise.usecase";
import { findAllEnterpriseUseCase } from "../../../useCase/enterprise/findAll/findAll.enterprise.usecase";
import { updateEnterpriseUseCase } from "../../../useCase/enterprise/update/update.enterprise.usecase";

interface CreateEnterpriseBody {
	name: string;
	cnpj: string;
	documents?: { documentId: string; issueDate: string; dueDate: string }[];
}

interface EnterpriseParams {
	id: string;
}

interface FindAllEnterpriseQuery {
	name?: string;
}

export async function createEnterprise(request: FastifyRequest<{ Body: CreateEnterpriseBody }>, reply: FastifyReply) {
	const { name, cnpj } = request.body;
	const createEnterpriseDto = {
		name,
		cnpj,
	};
	const enterprise = await createEnterpriseUseCase(createEnterpriseDto);

	return reply.status(201).send(enterprise);
}

export async function findAllEnterprise(request: FastifyRequest<{ Querystring: FindAllEnterpriseQuery }>, reply: FastifyReply) {
	const query = request.query;
	const enterprise = await findAllEnterpriseUseCase(query);

	return reply.status(200).send(enterprise);
}

export async function findEnterprise(request: FastifyRequest<{ Params: EnterpriseParams }>, reply: FastifyReply) {
	const { id } = request.params;
	const updateEnterpriseDto = {
		id,
	};

	try {
		const enterprise = await findEnterpriseUseCase(updateEnterpriseDto);
		return reply.status(200).send(enterprise);
	} catch (error) {
		if (error instanceof Error) {
			return reply.status(500).send({ error: error.message });
		}
		return reply.status(500).send({ error: "Unknown error" });
	}
}

export async function updateEnterprise(
	request: FastifyRequest<{ Params: EnterpriseParams; Body: CreateEnterpriseBody }>,
	reply: FastifyReply,
) {
	const { id } = request.params;
	const { name, cnpj, documents = [] } = request.body;
	const updateEnterpriseDto = {
		id,
		name,
		cnpj,
		documents,
	};

	try {
		const enterprise = await updateEnterpriseUseCase(updateEnterpriseDto);
		return reply.status(200).send(enterprise);
	} catch (error) {
		if (error instanceof Error) {
			return reply.status(500).send({ error: error.message });
		}
		return reply.status(500).send({ error: "Unknown error" });
	}
}

export async function deleteEnterprise(request: FastifyRequest<{ Params: EnterpriseParams }>, reply: FastifyReply) {
	const { id } = request.params;
	const deleteEnterpriseDto = {
		id,
	};

	try {
		const enterprise = await deleteEnterpriseUseCase(deleteEnterpriseDto);
		return reply.status(200).send(enterprise);
	} catch (error) {
		if (error instanceof Error) {
			return reply.status(500).send({ error: error.message });
		}
		return reply.status(500).send({ error: "Unknown error" });
	}
}
