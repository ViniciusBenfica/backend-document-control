export interface InputFindEnterpriseOnDocumentQueryParamDto {
	enterpriseId?: string;
}

export interface OutputFindEnterpriseOnDocumentQueryParamDto {
	id: string;
	issueDate: string;
	dueDate: string;
	document: {
		id: string;
		title: string;
		description: string;
	};
}
