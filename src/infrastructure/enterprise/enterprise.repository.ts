import { PrismaClient } from "@prisma/client";
import type Enterprise from "../../domain/enterprise/IEnterprise";
import type EnterpriseRepositoryInterface from "../../domain/enterprise/repository.enterprise";

const prismaClient = new PrismaClient();

const EnterpriseRepository: EnterpriseRepositoryInterface = {
	async create(entity: Enterprise) {
		return await prismaClient.enterprise.create({
			data: {
				name: entity.name,
				cnpj: entity.cnpj,
			},
		});
	},
	async findAll() {
		return await prismaClient.enterprise.findMany();
	},
	async find(id: string) {
		return await prismaClient.enterprise.findFirstOrThrow({
			where: {
				id: id,
			},
		});
	},
	async update(entity: Enterprise) {
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
	async delete(id: string) {
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
