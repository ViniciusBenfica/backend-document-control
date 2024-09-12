export interface InputEnterpriseOnDocumentDto {
	enterpriseId: string;
	documentId: string;
	issueDate: string;
	dueDate: string;
}

export interface OutputEnterpriseOnDocumentDto {
	documents: {
		id: string;
		issueDate: string;
		dueDate: string;
	}[];
}
