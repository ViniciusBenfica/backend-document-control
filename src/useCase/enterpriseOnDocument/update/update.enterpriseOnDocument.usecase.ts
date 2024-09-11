import EnterpriseOnDocumentRepository from "../../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type { InputUpdateEnterpriseOnDocumentDto, OutputUpdateEnterpriseOnDocumentDto } from "./update.enterpriseOnDocument.dto";

export async function updateEnterpriseOnDocumentUseCase(
	input: InputUpdateEnterpriseOnDocumentDto,
): Promise<OutputUpdateEnterpriseOnDocumentDto> {
	await EnterpriseOnDocumentRepository.update(input.enterpriseId, input.documents);

	return {
		documents: input.documents,
	};
}
