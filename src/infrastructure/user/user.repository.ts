import { PrismaClient } from "@prisma/client";
import type User from "../../domain/user/IUser";
import type UserRepositoryInterface from "../../domain/user/repository.user";

const prismaClient = new PrismaClient();

const UserRepository: UserRepositoryInterface = {
	async create(entity: User) {
		await prismaClient.user.create({
			data: {
				name: entity.name,
				cnpj: entity.cnpj,
			},
		});
	},
};

export default UserRepository;
