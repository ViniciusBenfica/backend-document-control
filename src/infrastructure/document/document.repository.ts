import { PrismaClient } from "@prisma/client";
import type DocumentRepositoryInterface from "../../domain/document/repository.document";

const prismaClient = new PrismaClient();

const DocumentRepository: DocumentRepositoryInterface = {
	async create(entity) {
		return await prismaClient.document.create({
			data: {
				title: entity.title,
				description: entity.description,
			},
		});
	},
	async findAll(query) {
		return await prismaClient.document.findMany({
			where: {
				title: {
					contains: query.title,
					mode: "insensitive",
				},
			},
		});
	},
	async find(id) {
		return await prismaClient.document.findFirstOrThrow({
			where: {
				id: id,
			},
		});
	},
	async update(entity) {
		return await prismaClient.document.update({
			where: {
				id: entity.id,
			},
			data: {
				title: entity.title,
				description: entity.description,
			},
		});
	},
	async delete(id) {
		await prismaClient.enterpriseOnDocument.deleteMany({
			where: {
				documentId: id,
			},
		});

		return await prismaClient.document.delete({
			where: { id },
		});
	},
};

export default DocumentRepository;
