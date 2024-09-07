export interface OutputFindAllEnterpriseOnDocumentDto {
	id: string;
	issueDate: string;
	dueDate: string;
	enterprise: {
		id: string;
		name: string;
		cnpj: string;
	};
	document: {
		id: string;
		title: string;
		description: string;
	};
}
