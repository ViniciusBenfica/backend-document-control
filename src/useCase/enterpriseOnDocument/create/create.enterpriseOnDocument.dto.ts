export interface InputEnterpriseOnDocumentDto {
	enterpriseId: string;
	documents: {
		id: string;
		issueDate: string;
		dueDate: string;
	}[];
}

export interface OutputEnterpriseOnDocumentDto {
	documents: {
		id: string;
		issueDate: string;
		dueDate: string;
	}[];
}
