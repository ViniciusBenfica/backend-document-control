import { PrismaClient } from "@prisma/client";
import type Document from "../../domain/document/IDocument";
import type DocumentRepositoryInterface from "../../domain/document/repository.user";

const prismaClient = new PrismaClient();

const DocumentRepository: DocumentRepositoryInterface = {
	async create(entity: Document) {
		await prismaClient.document.create({
			data: {
				titulo: entity.titulo,
				description: entity.description,
			},
		});
	},
};

export default DocumentRepository;
