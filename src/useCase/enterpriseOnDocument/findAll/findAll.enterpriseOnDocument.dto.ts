export interface InputFindAllEnterpriseOnDocumentDto {
	issueDate?: string;
	dueDate?: string;
	enterprise?: {
		id?: string;
		name?: string;
		cnpj?: string;
	};
	document?: {
		title?: string;
	};
}
export interface OutputFindAllEnterpriseOnDocumentDto {
	id: string;
	issueDate: string | Date;
	dueDate: string | Date;
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
