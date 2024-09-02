export interface InputEnterpriseOnDocumentDto {
	enterprise: {
		id: string;
	};
	document: {
		id: string;
	};
	issueDate: Date;
	dueDate: Date;
}

export interface OutputEnterpriseOnDocumentDto {
	enterpriseId: string;
	documentId: string;
	issueDate: Date;
	dueDate: Date;
}
