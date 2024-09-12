import type EnterpriseOnDocument from "./IEnterpriseOnDocument";
export default interface EnterpriseOnDocumentRepositoryInterface {
	create(entity: EnterpriseOnDocument[]): Promise<void>;
	findAll(): Promise<EnterpriseOnDocument[]>;
	findWithQuery(param: { enterpriseId?: string }): Promise<EnterpriseOnDocument[]>;
	update(entity: EnterpriseOnDocument[]): Promise<void>;
}
