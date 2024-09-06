export interface InputCreateEnterpriseDto {
	name: string;
	cnpj: string;
	documentId?: string;
	issueDate?: Date;
	dueDate?: Date;
}

export interface OutputCreateEnterpriseDto {
	id: string;
	name: string;
	cnpj: string;
}
