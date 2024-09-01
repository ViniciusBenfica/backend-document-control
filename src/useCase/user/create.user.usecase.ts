import UserRepository from "../../infrastructure/user/user.repository";
import { createUseronDocumentUseCase } from "../userOnDocument/create.userOnDocument.usecase";
import type { InputUserDto, OutputUserDto } from "./create.user.dto";

export async function createUserUseCase(input: InputUserDto): Promise<OutputUserDto> {
	const createUserDto = {
		name: input.name,
		cnpj: input.cnpj,
	};

	const user = await UserRepository.create(createUserDto);

	if (input.documentId && user.id && input.issueDate && input.dueDate) {
		const createUserOnDocumentDto = {
			userId: user.id,
			documentId: input.documentId,
			issueDate: input.issueDate,
			dueDate: input.dueDate,
		};
		createUseronDocumentUseCase(createUserOnDocumentDto);
	}

	return {
		name: input.name,
		cnpj: input.cnpj,
	};
}
