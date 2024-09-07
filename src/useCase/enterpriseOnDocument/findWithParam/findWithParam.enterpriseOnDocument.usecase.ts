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
			issueDate: enterpriseOnDocument.issueDate,
			dueDate: enterpriseOnDocument.dueDate,
			document: {
				id: enterpriseOnDocument.document?.id as string,
				title: enterpriseOnDocument.document?.title as string,
				description: enterpriseOnDocument.document?.description as string,
			},
		};
	});
}
