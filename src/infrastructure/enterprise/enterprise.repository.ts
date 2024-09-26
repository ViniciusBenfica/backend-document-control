import { PrismaClient } from "@prisma/client";
import type EnterpriseRepositoryInterface from "../../domain/enterprise/repository.enterprise";

const prismaClient = new PrismaClient();

const EnterpriseRepository: EnterpriseRepositoryInterface = {
	async create(entity) {
		return await prismaClient.enterprise.create({
			data: {
				name: entity.name,
				cnpj: entity.cnpj,
			},
		});
	},
	async findAll(query) {
		return await prismaClient.enterprise.findMany({
			where: {
				name: {
					contains: query.name,
					mode: "insensitive",
				},
				cnpj: {
					contains: query.cnpj,
				},
			},
		});
	},
	async find(id) {
		return await prismaClient.enterprise.findFirstOrThrow({
			where: {
				id: id,
			},
		});
	},
	async update(entity) {
		return await prismaClient.enterprise.update({
			where: {
				id: entity.id,
			},
			data: {
				name: entity.name,
				cnpj: entity.cnpj,
			},
		});
	},
	async delete(id) {
		await prismaClient.enterpriseOnDocument.deleteMany({
			where: {
				enterpriseId: id,
			},
		});

		return await prismaClient.enterprise.delete({
			where: { id },
		});
	},
};

export default EnterpriseRepository;
