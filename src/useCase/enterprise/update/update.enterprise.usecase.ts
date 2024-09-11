import EnterpriseRepository from "../../../infrastructure/enterprise/enterprise.repository";
import { updateEnterpriseOnDocumentUseCase } from "../../enterpriseOnDocument/update/update.enterpriseOnDocument.usecase";
import type { InputUpdateEnterpriseDto, OutputUpdateEnterpriseDto } from "./update.enterprise.dto";

export async function updateEnterpriseUseCase(input: InputUpdateEnterpriseDto): Promise<OutputUpdateEnterpriseDto> {
	const enterprise = await EnterpriseRepository.update(input);

	const updaetEnterpriseOnDocumentDto = {
		enterpriseId: input.id,
		documents: input.documents,
	};

	const enterpriseOnDocument = await updateEnterpriseOnDocumentUseCase(updaetEnterpriseOnDocumentDto);

	return {
		id: input.id,
		name: enterprise.name,
		cnpj: enterprise.cnpj,
		documents: enterpriseOnDocument.documents,
	};
}
