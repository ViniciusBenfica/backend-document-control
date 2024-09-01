import { PrismaClient } from "@prisma/client";
import type IUserOnDocument from "../../domain/userOnDocument/IUserOnDocument";
import type UserOnDocumentRepositoryInterface from "../../domain/userOnDocument/repository.userOnDocument";

const prismaClient = new PrismaClient();

const UserOnDocumentRepository: UserOnDocumentRepositoryInterface = {
	async create(entity: IUserOnDocument) {
		await prismaClient.userOnDocument.create({
			data: {
				user: { connect: { id: entity.userId } },
				document: { connect: { id: entity.documentId } },
				issueDate: entity.issueDate,
				dueDate: entity.dueDate,
			},
		});
	},
};

export default UserOnDocumentRepository;
