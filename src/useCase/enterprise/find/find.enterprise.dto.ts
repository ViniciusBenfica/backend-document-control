export interface InputFindEnterpriseDto {
	id: string;
}
export interface OutputFindEnterpriseDto {
	id: string;
	name: string;
	cnpj: string;
	documents: {
		id: string;
		title: string;
		description: string;
		issueDate: string | Date;
		dueDate: string | Date;
	}[];
}
