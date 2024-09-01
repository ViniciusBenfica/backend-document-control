export interface InputUserDto {
	name: string;
	cnpj: string;
	documentId?: string;
	issueDate?: string;
	dueDate?: string;
}

export interface OutputUserDto {
	name: string;
	cnpj: string;
}
