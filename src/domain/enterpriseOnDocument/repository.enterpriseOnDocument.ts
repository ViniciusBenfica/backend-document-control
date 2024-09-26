import type EnterpriseOnDocument from "./IEnterpriseOnDocument";
export default interface EnterpriseOnDocumentRepositoryInterface {
	create(entity: EnterpriseOnDocument[]): Promise<void>;
	findAll(entity: Partial<EnterpriseOnDocument>): Promise<EnterpriseOnDocument[]>;
	update(entity: EnterpriseOnDocument[]): Promise<void>;
}
