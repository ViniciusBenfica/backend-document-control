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
		const startDate = query.issueDate ? new Date(query.issueDate) : undefined;
		const endDate = query.dueDate ? new Date(query.dueDate) : undefined;

		return await prismaClient.enterpriseOnDocument.findMany({
			where: {
				enterpriseId: query.enterprise?.id,
				OR: [
					{
						enterprise: {
							name: {
								contains: query.enterprise?.name,
								mode: "insensitive",
							},
						},
					},
					{
						enterprise: {
							cnpj: {
								contains: query.enterprise?.cnpj,
							},
						},
					},
					{
						document: {
							title: {
								contains: query.document?.title,
								mode: "insensitive",
							},
						},
					},
				],
				AND: { dueDate: { gte: startDate, lte: endDate } },
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
