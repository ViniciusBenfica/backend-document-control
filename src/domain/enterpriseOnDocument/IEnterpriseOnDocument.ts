import type IDocument from "../document/IDocument";
import type IEnterprise from "../enterprise/IEnterprise";

type WithId<T> = T & { id: string };
export default interface IEnterpriseOnDocument {
	id?: string;
	enterprise: WithId<IEnterprise>;
	document: WithId<IDocument>;
	issueDate: string | Date;
	dueDate: string | Date;
}
