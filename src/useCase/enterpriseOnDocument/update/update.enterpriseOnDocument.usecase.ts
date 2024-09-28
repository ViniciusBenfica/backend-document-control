import EnterpriseOnDocumentRepository from "../../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type { InputUpdateEnterpriseOnDocumentDto } from "./update.enterpriseOnDocument.dto";

export async function updateEnterpriseOnDocumentUseCase(input: InputUpdateEnterpriseOnDocumentDto) {
	const updateEnterpriseOnDocumentDto = input.documents.map((item) => ({
		enterpriseId: input.enterpriseId,
		documentId: item.documentId,
		issueDate: item.issueDate,
		dueDate: item.dueDate,
	}));
	await EnterpriseOnDocumentRepository.update(updateEnterpriseOnDocumentDto);
}
