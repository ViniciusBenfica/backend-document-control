import EnterpriseRepository from "../../../infrastructure/enterprise/enterprise.repository";
import type { InputFindEnterpriseDto, OutputFindEnterpriseDto } from "./find.enterprise.dto";

export async function findEnterpriseUseCase(input: InputFindEnterpriseDto): Promise<OutputFindEnterpriseDto> {
	const enterprise = await EnterpriseRepository.find(input.id);

	return {
		id: enterprise.id as string,
		name: enterprise.name,
		cnpj: enterprise.cnpj,
	};
}
