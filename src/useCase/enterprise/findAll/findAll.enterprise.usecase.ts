import EnterpriseOnDocumentRepository from "../../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type { OutputFindAllEnterpriseDto } from "./findAll.enterprise.dto";

export async function findAllEnterpriseUseCase(): Promise<OutputFindAllEnterpriseDto[]> {
	const enterprise = await EnterpriseOnDocumentRepository.findAll();

	return enterprise.map((enterprise) => {
		return {
			id: enterprise.id as string,
			name: enterprise.name,
			cnpj: enterprise.cnpj,
		};
	});
}
