import EnterpriseOnDocumentRepository from "../../../infrastructure/enterpriseOnDocument/enterpriseOnDocument.repository";
import type {
	InputFindEnterpriseOnDocumentQueryParamDto,
	OutputFindEnterpriseOnDocumentQueryParamDto,
} from "./findWithParam.enterpriseOnDocument.dto";

export async function findEnterpriseOnDocumentQueryParamUseCase(
	input: InputFindEnterpriseOnDocumentQueryParamDto,
): Promise<OutputFindEnterpriseOnDocumentQueryParamDto[]> {
	const enterpriseOnDocument = await EnterpriseOnDocumentRepository.findWithQuery(input);

	return enterpriseOnDocument.map((item) => {
		return {
			id: item.id as string,
			issueDate: item.issueDate,
			dueDate: item.dueDate,
			document: {
				id: item.document?.id as string,
				title: item.document?.title as string,
				description: item.document?.description as string,
			},
		};
	});
}
