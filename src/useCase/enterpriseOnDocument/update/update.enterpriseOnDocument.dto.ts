export interface InputUpdateEnterpriseOnDocumentDto {
	enterpriseId: string;
	documents: {
		id: string;
		issueDate: string;
		dueDate: string;
	}[];
}

export interface OutputUpdateEnterpriseOnDocumentDto {
	documents: {
		id: string;
		issueDate: string;
		dueDate: string;
	}[];
}
