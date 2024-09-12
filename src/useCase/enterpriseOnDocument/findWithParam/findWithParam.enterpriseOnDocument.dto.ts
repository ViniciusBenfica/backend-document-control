export interface InputFindEnterpriseOnDocumentQueryParamDto {
	enterpriseId?: string;
}
export interface OutputFindEnterpriseOnDocumentQueryParamDto {
	id: string;
	issueDate: string | Date;
	dueDate: string | Date;
	document: {
		id: string;
		title: string;
		description: string;
	};
}
