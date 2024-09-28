export interface InputEnterpriseOnDocumentDto {
	enterpriseId: string;
	documents: {
		documentId: string;
		issueDate: string;
		dueDate: string;
	}[];
}
