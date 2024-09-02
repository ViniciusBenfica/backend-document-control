export interface InputCreateUserDto {
	name: string;
	cnpj: string;
	documentId?: string;
	issueDate?: string;
	dueDate?: string;
}

export interface OutputCreateUserDto {
	name: string;
	cnpj: string;
}
