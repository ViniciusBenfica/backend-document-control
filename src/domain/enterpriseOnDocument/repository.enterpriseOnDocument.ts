import type EnterpriseOnDocument from "./IEnterpriseOnDocument";
export default interface EnterpriseOnDocumentRepositoryInterface {
	create(entity: EnterpriseOnDocument): Promise<EnterpriseOnDocument>;
	findAll(): Promise<EnterpriseOnDocument[]>;
	findWithQuery(param: { enterpriseId?: string }): Promise<EnterpriseOnDocument[]>;
}
