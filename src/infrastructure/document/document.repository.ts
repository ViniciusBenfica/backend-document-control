import { PrismaClient } from "@prisma/client";
import type Document from "../../domain/document/IDocument";
import type DocumentRepositoryInterface from "../../domain/document/repository.document";

const prismaClient = new PrismaClient();

const DocumentRepository: DocumentRepositoryInterface = {
	async create(entity: Document) {
		return await prismaClient.document.create({
			data: {
				title: entity.title,
				description: entity.description,
			},
		});
	},
	async findAll() {
		return await prismaClient.document.findMany();
	},
	async find(id: string) {
		return await prismaClient.document.findFirstOrThrow({
			where: {
				id: id,
			},
		});
	},
	async update(entity: Document) {
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
	async delete(id: string) {
		return await prismaClient.document.delete({
			where: { id },
		});
	},
};

export default DocumentRepository;
