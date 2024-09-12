import type IDocument from "../document/IDocument";
import type IEnterprise from "../enterprise/IEnterprise";

export default interface IEnterpriseOnDocument {
	id?: string;
	enterprise: IEnterprise;
	document: IDocument;
	issueDate: string | Date;
	dueDate: string | Date;
}
