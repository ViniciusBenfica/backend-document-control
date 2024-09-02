export interface InputCreateEnterpriseDto {
	name: string;
	cnpj: string;
	documentId?: string;
	issueDate?: string;
	dueDate?: string;
}

export interface OutputCreateEnterpriseDto {
	name: string;
	cnpj: string;
}
