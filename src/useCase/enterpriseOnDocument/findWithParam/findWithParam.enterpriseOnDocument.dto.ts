export interface InputFindEnterpriseOnDocumentQueryParamDto {
	enterpriseId?: string;
}

export interface OutputFindEnterpriseOnDocumentQueryParamDto {
	id: string;
	document: string;
	dueDate: Date;
	issueDate: Date;
}
