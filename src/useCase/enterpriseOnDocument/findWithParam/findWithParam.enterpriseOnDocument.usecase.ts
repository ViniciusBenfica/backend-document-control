import EnterpriseOnDocumentRepository from "../../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type {
	InputFindEnterpriseOnDocumentQueryParamDto,
	OutputFindEnterpriseOnDocumentQueryParamDto,
} from "./findWithParam.enterpriseOnDocument.dto";

export async function findEnterpriseOnDocumentQueryParamUseCase(
	input: InputFindEnterpriseOnDocumentQueryParamDto,
): Promise<OutputFindEnterpriseOnDocumentQueryParamDto[]> {
	const enterpriseOnDocument = await EnterpriseOnDocumentRepository.findWithQuery(input);

	return enterpriseOnDocument.map((enterpriseOnDocument) => {
		return {
			id: enterpriseOnDocument.id as string,
			document: enterpriseOnDocument.document?.title as string,
			dueDate: enterpriseOnDocument.dueDate,
			issueDate: enterpriseOnDocument.issueDate,
		};
	});
}
