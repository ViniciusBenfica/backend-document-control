import { PrismaClient } from "@prisma/client";
import type IEnterpriserOnDocument from "../../domain/enterpriseOnDocument/IEnterpriseOnDocument";
import type EnterpriseOnDocumentRepositoryInterface from "../../domain/enterpriseOnDocument/repository.enterpriseOnDocument";

const prismaClient = new PrismaClient();

const EnterpriseOnDocumentRepository: EnterpriseOnDocumentRepositoryInterface = {
	async create(entity: IEnterpriserOnDocument) {
		return await prismaClient.enterpriseOnDocument.create({
			data: {
				enterprise: { connect: { id: entity.enterprise?.id } },
				document: { connect: { id: entity.document?.id } },
				issueDate: entity.issueDate,
				dueDate: entity.dueDate,
			},
		});
	},
	async findAll() {
		return await prismaClient.enterpriseOnDocument.findMany({
			include: {
				enterprise: true,
				document: true,
			},
		});
	},
	async findWithQuery(param: { enterpriseId?: string }) {
		return await prismaClient.enterpriseOnDocument.findMany({
			where: {
				enterpriseId: param.enterpriseId,
			},
			include: {
				enterprise: true,
				document: true,
			},
		});
	},
	async update(enterpriseId: string, entity: IEnterpriserOnDocument) {
		await prismaClient.enterpriseOnDocument.updateMany({
			where: {
				enterpriseId: enterpriseId,
			},
			data: {
				issueDate: entity.issueDate,
				dueDate: entity.dueDate,
			},
		});
	},
};

export default EnterpriseOnDocumentRepository;
