import EnterpriseOnDocumentRepository from "../../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type { InputEnterpriseOnDocumentDto, OutputEnterpriseOnDocumentDto } from "./create.enterpriseOnDocument.dto";

export async function createEnterpriseonDocumentUseCase(
	input: InputEnterpriseOnDocumentDto,
): Promise<OutputEnterpriseOnDocumentDto> {
	const createEnterpriseOnDocumentDto = input.documents.map((item) => ({
		enterpriseId: input.enterpriseId,
		documentId: item.id,
		issueDate: item.issueDate,
		dueDate: item.dueDate,
	}));

	await EnterpriseOnDocumentRepository.create(createEnterpriseOnDocumentDto);

	return {
		documents: input.documents,
	};
}
