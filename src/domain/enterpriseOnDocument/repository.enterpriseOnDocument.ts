import type IDocument from "../document/IDocument";
import type IEnterprise from "../enterprise/IEnterprise";
import type EnterpriseOnDocument from "./IEnterpriseOnDocument";
interface IEnterpriseOnDocument extends Omit<EnterpriseOnDocument, "enterprise" | "document"> {
	enterpriseId: string;
	documentId: string;
}
interface IEnterpriseOnDocumentFindAll extends Omit<EnterpriseOnDocument, "enterprise" | "document"> {
	enterprise: Partial<IEnterprise>;
	document: Partial<IDocument>;
}

export default interface EnterpriseOnDocumentRepositoryInterface {
	create(entity: IEnterpriseOnDocument[]): Promise<void>;
	findAll(entity: Partial<IEnterpriseOnDocumentFindAll>): Promise<EnterpriseOnDocument[]>;
	update(entity: IEnterpriseOnDocument[]): Promise<void>;
}
