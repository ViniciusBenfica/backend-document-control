import { PrismaClient } from "@prisma/client";
import type EnterpriseOnDocumentRepositoryInterface from "../../domain/enterpriseOnDocument/repository.enterpriseOnDocument";

const prismaClient = new PrismaClient();

const EnterpriseOnDocumentRepository: EnterpriseOnDocumentRepositoryInterface = {
	async create(entity) {
		await prismaClient.enterpriseOnDocument.createMany({
			data: entity,
			skipDuplicates: true,
		});
	},
	async findAll(query) {
		return await prismaClient.enterpriseOnDocument.findMany({
			where: {
				documentId: query.documentId,
				enterprise: {
					name: {
						contains: query.enterprise?.name,
						mode: "insensitive",
					},
					cnpj: {
						contains: query.enterprise?.name,
					}
				},
				document: {
					title: {
						contains: query.document?.title,
						mode: "insensitive",
					}
				}
			},
			include: {
				enterprise: true,
				document: true,
			},
		});
	},
	async update(entity) {
		const incomingDocumentIds = entity.map((doc) => doc.documentId);

		await prismaClient.enterpriseOnDocument.deleteMany({
			where: {
				enterpriseId: entity[0].enterpriseId,
				documentId: {
					notIn: incomingDocumentIds,
				},
			},
		});

		const updatePromises = entity.map((entity) => {
			return prismaClient.enterpriseOnDocument.upsert({
				where: {
					enterpriseId_documentId: {
						enterpriseId: entity.enterpriseId,
						documentId: entity.documentId,
					},
				},
				update: {
					issueDate: entity.issueDate,
					dueDate: entity.dueDate,
				},
				create: {
					enterpriseId: entity.enterpriseId,
					documentId: entity.documentId,
					issueDate: entity.issueDate,
					dueDate: entity.dueDate,
				},
			});
		});

		await prismaClient.$transaction(updatePromises);
	},
};

export default EnterpriseOnDocumentRepository;
