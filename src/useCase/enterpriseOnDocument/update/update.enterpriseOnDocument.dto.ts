export interface InputUpdateEnterpriseOnDocumentDto {
	enterpriseId: string;
	documents: {
		documentId: string;
		issueDate: string;
		dueDate: string;
	}[];
}
