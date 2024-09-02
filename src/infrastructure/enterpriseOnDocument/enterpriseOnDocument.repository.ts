import { PrismaClient } from "@prisma/client";
import type IEnterpriserOnDocument from "../../domain/enterpriseOnDocument/IEnterpriseOnDocument";
import EnterpriseOnDocumentRepositoryInterface from "../../domain/enterpriseOnDocument/repository.enterpriseOnDocument";

const prismaClient = new PrismaClient();

const EnterpriseOnDocumentRepository: EnterpriseOnDocumentRepositoryInterface = {
	async create(entity: IEnterpriserOnDocument) {
		await prismaClient.enterpriseOnDocument.create({
			data: {
				enterprise: { connect: { id: entity.enterpriseId } },
				document: { connect: { id: entity.documentId } },
				issueDate: entity.issueDate,
				dueDate: entity.dueDate,
			},
		});
	},
};

export default EnterpriseOnDocumentRepository;
