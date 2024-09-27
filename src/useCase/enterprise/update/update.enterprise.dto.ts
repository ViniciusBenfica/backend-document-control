export interface InputUpdateEnterpriseDto {
	id: string;
	name: string;
	cnpj: string;
	documents: {
		documentId: string;
		issueDate: string;
		dueDate: string;
	}[];
}

export interface OutputUpdateEnterpriseDto {
	id: string;
	name: string;
	cnpj: string;
	documents: {
		documentId: string;
		issueDate: string;
		dueDate: string;
	}[];
}
