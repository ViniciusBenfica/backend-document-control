import EnterpriseRepository from "../../../infrastructure/enterprise/enterprise.repository";
import type { InputFindAllEnterpriseDto, OutputFindAllEnterpriseDto } from "./findAll.enterprise.dto";

export async function findAllEnterpriseUseCase(input: InputFindAllEnterpriseDto): Promise<OutputFindAllEnterpriseDto[]> {
	const enterprise = await EnterpriseRepository.findAll(input);

	return enterprise.map((enterprise) => {
		return {
			id: enterprise.id as string,
			name: enterprise.name,
			cnpj: enterprise.cnpj,
		};
	});
}
