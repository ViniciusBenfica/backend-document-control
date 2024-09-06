import EnterpriseOnDocumentRepository from "../../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type { InputEnterpriseOnDocumentDto, OutputEnterpriseOnDocumentDto } from "./create.enterpriseOnDocument.dto";

export async function createEnterpriseonDocumentUseCase(input: InputEnterpriseOnDocumentDto): OutputEnterpriseOnDocumentDto {
	const enterpriseOnDocument = await EnterpriseOnDocumentRepository.create(input);
	return {
		id: enterpriseOnDocument.id as string,
		enterpriseId: input.enterprise.id,
		documentId: input.document.id,
		issueDate: input.issueDate,
		dueDate: input.dueDate,
	};
}
