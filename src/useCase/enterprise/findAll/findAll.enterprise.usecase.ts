import EnterpriseRepository from "../../../infrastructure/enterprise/enterprise.repository";
import type { OutputFindAllEnterpriseDto } from "./findAll.enterprise.dto";

export async function findAllEnterpriseUseCase(): Promise<OutputFindAllEnterpriseDto[]> {
	const enterprise = await EnterpriseRepository.findAll();

	return enterprise.map((enterprise) => {
		return {
			id: enterprise.id as string,
			name: enterprise.name,
			cnpj: enterprise.cnpj,
		};
	});
}
