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
	id: string;
	enterpriseId: string;
	documentId: string;
	issueDate: Date;
	dueDate: Date;
}
