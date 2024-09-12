import EnterpriseRepository from "../../../infrastructure/enterprise/enterprise.repository";
import { findEnterpriseOnDocumentQueryParamUseCase } from "../../enterpriseOnDocument/findWithParam/findWithParam.enterpriseOnDocument.usecase";
import type { InputFindEnterpriseDto, OutputFindEnterpriseDto } from "./find.enterprise.dto";

export async function findEnterpriseUseCase(input: InputFindEnterpriseDto): Promise<OutputFindEnterpriseDto> {
	const enterprise = await EnterpriseRepository.find(input.id);

	const enterpriseOnDocument = await findEnterpriseOnDocumentQueryParamUseCase({ enterpriseId: enterprise.id as string });

	return {
		id: enterprise.id as string,
		name: enterprise.name,
		cnpj: enterprise.cnpj,
		documents: enterpriseOnDocument.map((item) => {
			return {
				id: item.id,
				documentId: item.document.id,
				title: item.document.title,
				description: item.document.description,
				issueDate: item.issueDate,
				dueDate: item.dueDate,
			};
		}),
	};
}
