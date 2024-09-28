import EnterpriseOnDocumentRepository from "../../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type { InputEnterpriseOnDocumentDto } from "./create.enterpriseOnDocument.dto";

export async function createEnterpriseonDocumentUseCase(input: InputEnterpriseOnDocumentDto) {
	const createEnterpriseOnDocumentDto = input.documents.map((item) => ({
		enterpriseId: input.enterpriseId,
		documentId: item.documentId,
		issueDate: item.issueDate,
		dueDate: item.dueDate,
	}));
	await EnterpriseOnDocumentRepository.create(createEnterpriseOnDocumentDto);
}
