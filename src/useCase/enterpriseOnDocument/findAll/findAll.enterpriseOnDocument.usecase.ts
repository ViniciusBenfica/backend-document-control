import EnterpriseOnDocumentRepository from "../../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type { InputFindAllEnterpriseOnDocumentDto, OutputFindAllEnterpriseOnDocumentDto } from "./findAll.enterpriseOnDocument.dto";

export async function findAllEnterpriseOnDocumentUseCase(input: InputFindAllEnterpriseOnDocumentDto): Promise<OutputFindAllEnterpriseOnDocumentDto[]> {
	const enterprise = await EnterpriseOnDocumentRepository.findAll(input);

	return enterprise.map((enterprise) => {
		return {
			id: enterprise.id as string,
			issueDate: enterprise.issueDate,
			dueDate: enterprise.dueDate,
			enterprise: {
				id: enterprise.enterprise?.id as string,
				name: enterprise.enterprise?.name as string,
				cnpj: enterprise.enterprise?.cnpj as string,
			},
			document: {
				id: enterprise.document?.id as string,
				title: enterprise.document?.title as string,
				description: enterprise.document?.description as string,
			},
		};
	});
}
