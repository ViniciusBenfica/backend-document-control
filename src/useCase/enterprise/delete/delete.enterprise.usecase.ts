import EnterpriseRepository from "../../../infrastructure/enterprise/enterprise.repository";
import type { InputDeleteEnterpriseDto, OutputDeleteEnterpriseDto } from "./delete.enterprise.dto";

export async function deleteEnterpriseUseCase(input: InputDeleteEnterpriseDto): Promise<OutputDeleteEnterpriseDto> {
	const enterprise = await EnterpriseRepository.delete(input.id);

	return {
		id: enterprise.id as string,
		name: enterprise.name,
		cnpj: enterprise.cnpj,
	};
}
