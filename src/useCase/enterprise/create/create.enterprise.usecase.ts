import EnterpriseRepository from "../../../infrastructure/enterprise/enterprise.repository";
import { createEnterpriseonDocumentUseCase } from "../../enterpriseOnDocument/create/create.enterpriseOnDocument.usecase";
import type { InputCreateEnterpriseDto, OutputCreateEnterpriseDto } from "./create.enterprise.dto";

export async function createEnterpriseUseCase(input: InputCreateEnterpriseDto): Promise<OutputCreateEnterpriseDto> {
	const createEnterpriseDto = {
		name: input.name,
		cnpj: input.cnpj,
	};

	const enterprise = await EnterpriseRepository.create(createEnterpriseDto);

	if (input.documents) {
		const createEnterpriseOnDocumentDto = {
			enterpriseId: enterprise.id as string,
			documents: input.documents,
		};

		createEnterpriseonDocumentUseCase(createEnterpriseOnDocumentDto);
	}

	return {
		id: enterprise.id as string,
		name: input.name,
		cnpj: input.cnpj,
		documents: input.documents,
	};
}
