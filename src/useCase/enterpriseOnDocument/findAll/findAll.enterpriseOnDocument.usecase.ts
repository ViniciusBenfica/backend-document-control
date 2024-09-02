import EnterpriseOnDocumentRepository from "../../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type { OutputFindAllEnterpriseOnDocumentDto } from "./findAll.enterpriseOnDocument.dto";

export async function findAllEnterpriseOnDocumentUseCase(): Promise<OutputFindAllEnterpriseOnDocumentDto[]> {
	const enterprise = await EnterpriseOnDocumentRepository.findAll();

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
