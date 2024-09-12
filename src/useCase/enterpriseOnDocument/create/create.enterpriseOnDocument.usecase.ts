import EnterpriseOnDocumentRepository from "../../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type { InputEnterpriseOnDocumentDto, OutputEnterpriseOnDocumentDto } from "./create.enterpriseOnDocument.dto";

export async function createEnterpriseonDocumentUseCase(
	input: InputEnterpriseOnDocumentDto[],
): Promise<OutputEnterpriseOnDocumentDto> {
	await EnterpriseOnDocumentRepository.create(input);

	return {
		documents: input.map((item) => {
			return { id: item.documentId, issueDate: item.issueDate, dueDate: item.dueDate };
		}),
	};
}
