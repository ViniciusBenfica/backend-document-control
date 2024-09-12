import { PrismaClient } from "@prisma/client";
import type IEnterpriserOnDocument from "../../domain/enterpriseOnDocument/IEnterpriseOnDocument";
import type EnterpriseOnDocumentRepositoryInterface from "../../domain/enterpriseOnDocument/repository.enterpriseOnDocument";

const prismaClient = new PrismaClient();

const EnterpriseOnDocumentRepository: EnterpriseOnDocumentRepositoryInterface = {
	async create(entity: IEnterpriserOnDocument[]) {
		await prismaClient.enterpriseOnDocument.createMany({
			data: entity,
			skipDuplicates: true,
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
	async update(entity: IEnterpriserOnDocument[]) {
		const updatePromises = entity.map((entity) => {
			return prismaClient.enterpriseOnDocument.update({
				where: {
					enterpriseId_documentId: {
						enterpriseId: entity.enterpriseId,
						documentId: entity.documentId,
					},
				},
				data: {
					issueDate: entity.issueDate,
					dueDate: entity.dueDate,
				},
			});
		});

		await prismaClient.$transaction(updatePromises);
	},
};

export default EnterpriseOnDocumentRepository;
