import UserOnDocumentRepository from "../../infrastructure/userOnDocument/userOnDocument.repository";
import type { InputUserOnDocumentDto, OutputUserOnDocumentDto } from "./create.userOnDocument.dto";

export function createUseronDocumentUseCase(input: InputUserOnDocumentDto): OutputUserOnDocumentDto {
	UserOnDocumentRepository.create(input);
	return {
		userId: input.userId,
		documentId: input.documentId,
		issueDate: input.issueDate,
		dueDate: input.dueDate,
	};
}
