import EnterpriseOnDocumentRepository from "../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type { InputEnterpriseOnDocumentDto, OutputEnterpriseOnDocumentDto } from "./create.enterpriseOnDocument.dto";

export function createEnterpriseonDocumentUseCase(input: InputEnterpriseOnDocumentDto): OutputEnterpriseOnDocumentDto {
	EnterpriseOnDocumentRepository.create(input);
	return {
		enterpriseId: input.enterpriseId,
		documentId: input.documentId,
		issueDate: input.issueDate,
		dueDate: input.dueDate,
	};
}
