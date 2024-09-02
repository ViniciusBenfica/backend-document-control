import EnterpriseRepository from "../../../infrastructure/enterprise/enterprise.repository";
import { createEnterpriseonDocumentUseCase } from "../../enterpriseOnDocument/create/create.enterpriseOnDocument.usecase";
import type { InputCreateEnterpriseDto, OutputCreateEnterpriseDto } from "./create.enterprise.dto";

export async function createEnterpriseUseCase(input: InputCreateEnterpriseDto): Promise<OutputCreateEnterpriseDto> {
	const createEnterpriseDto = {
		name: input.name,
		cnpj: input.cnpj,
	};

	const enterprise = await EnterpriseRepository.create(createEnterpriseDto);

	if (input.documentId && enterprise.id && input.issueDate && input.dueDate) {
		const createEnterpriseOnDocumentDto = {
			enterprise: { id: enterprise.id },
			document: { id: input.documentId },
			issueDate: input.issueDate,
			dueDate: input.dueDate,
		};

		createEnterpriseonDocumentUseCase(createEnterpriseOnDocumentDto);
	}

	return {
		name: input.name,
		cnpj: input.cnpj,
	};
}
