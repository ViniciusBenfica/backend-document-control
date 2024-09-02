export interface OutputFindAllEnterpriseOnDocumentDto {
	id: string;
	issueDate: Date;
	dueDate: Date;
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
