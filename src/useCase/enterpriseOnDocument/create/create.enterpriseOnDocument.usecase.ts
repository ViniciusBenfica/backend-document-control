import EnterpriseOnDocumentRepository from "../../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type { InputEnterpriseOnDocumentDto, OutputEnterpriseOnDocumentDto } from "./create.enterpriseOnDocument.dto";

export function createEnterpriseonDocumentUseCase(input: InputEnterpriseOnDocumentDto): OutputEnterpriseOnDocumentDto {
	EnterpriseOnDocumentRepository.create(input);
	return {
		enterpriseId: input.enterprise.id,
		documentId: input.document.id,
		issueDate: input.issueDate,
		dueDate: input.dueDate,
	};
}
