export interface InputCreateEnterpriseDto {
	name: string;
	cnpj: string;
	documents?: {
		id: string;
		issueDate: string;
		dueDate: string;
	}[];
}

export interface OutputCreateEnterpriseDto {
	id: string;
	name: string;
	cnpj: string;
	documents?: {
		id: string;
		issueDate: string;
		dueDate: string;
	}[];
}
