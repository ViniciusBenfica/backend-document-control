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
		const createEnterpriseOnDocumentDto = input.documents.map((item) => ({
			enterpriseId: enterprise.id as string,
			documentId: item.id,
			issueDate: item.issueDate,
			dueDate: item.dueDate,
		}));

		createEnterpriseonDocumentUseCase(createEnterpriseOnDocumentDto);
	}

	return {
		id: enterprise.id as string,
		name: input.name,
		cnpj: input.cnpj,
		documents: input.documents,
	};
}
