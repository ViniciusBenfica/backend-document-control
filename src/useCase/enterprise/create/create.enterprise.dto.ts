export interface InputCreateEnterpriseDto {
	name: string;
	cnpj: string;
	documentId?: string;
	issueDate?: Date;
	dueDate?: Date;
}

export interface OutputCreateEnterpriseDto {
	name: string;
	cnpj: string;
}
