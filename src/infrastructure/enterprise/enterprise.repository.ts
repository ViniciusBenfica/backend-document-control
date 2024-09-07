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
};

export default EnterpriseRepository;
