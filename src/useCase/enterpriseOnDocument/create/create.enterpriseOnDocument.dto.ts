export interface InputEnterpriseOnDocumentDto {
	enterprise: {
		id: string;
	};
	document: {
		id: string;
	};
	issueDate: string;
	dueDate: string;
}

export interface OutputEnterpriseOnDocumentDto {
	id: string;
	enterpriseId: string;
	documentId: string;
	issueDate: string;
	dueDate: string;
}
