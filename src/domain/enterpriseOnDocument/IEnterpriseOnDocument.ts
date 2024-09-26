import type IDocument from "../document/IDocument";
import type IEnterprise from "../enterprise/IEnterprise";
export default interface IEnterpriseOnDocument {
	id?: string;
	enterpriseId: string;
	documentId: string;
	enterprise?: Partial<IEnterprise>;
	document?: Partial<IDocument>;
	issueDate: string | Date;
	dueDate: string | Date;
}
