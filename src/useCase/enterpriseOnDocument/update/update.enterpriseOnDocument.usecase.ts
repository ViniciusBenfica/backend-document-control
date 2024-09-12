import EnterpriseOnDocumentRepository from "../../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type { InputUpdateEnterpriseOnDocumentDto, OutputUpdateEnterpriseOnDocumentDto } from "./update.enterpriseOnDocument.dto";

export async function updateEnterpriseOnDocumentUseCase(
	input: InputUpdateEnterpriseOnDocumentDto[],
): Promise<OutputUpdateEnterpriseOnDocumentDto[]> {
	const updateEnterpriseOnDocumentDto = input.map((item) => ({
		enterpriseId: item.enterpriseId,
		documentId: item.documentId,
		issueDate: item.issueDate,
		dueDate: item.dueDate,
	}));

	await EnterpriseOnDocumentRepository.update(updateEnterpriseOnDocumentDto);

	return input.map((item) => ({
		enterpriseId: item.enterpriseId,
		documentId: item.documentId,
		issueDate: item.issueDate,
		dueDate: item.dueDate,
	}));
}
