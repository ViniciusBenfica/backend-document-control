import EnterpriseOnDocumentRepository from "../../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type {
	InputFindAllEnterpriseOnDocumentDto,
	OutputFindAllEnterpriseOnDocumentDto,
} from "./findAll.enterpriseOnDocument.dto";

export async function findAllEnterpriseOnDocumentUseCase(
	input: InputFindAllEnterpriseOnDocumentDto,
): Promise<OutputFindAllEnterpriseOnDocumentDto[]> {
	const enterpriseOnDocument = await EnterpriseOnDocumentRepository.findAll(input);

	return enterpriseOnDocument.map((enterpriseOnDocument) => {
		return {
			id: enterpriseOnDocument.id as string,
			issueDate: enterpriseOnDocument.issueDate,
			dueDate: enterpriseOnDocument.dueDate,
			enterprise: {
				id: enterpriseOnDocument.enterprise?.id,
				name: enterpriseOnDocument.enterprise?.name,
				cnpj: enterpriseOnDocument.enterprise?.cnpj,
			},
			document: {
				id: enterpriseOnDocument.document?.id,
				title: enterpriseOnDocument.document?.title,
				description: enterpriseOnDocument.document?.description,
			},
		};
	});
}
