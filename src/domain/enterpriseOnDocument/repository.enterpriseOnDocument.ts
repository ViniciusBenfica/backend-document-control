import type EnterpriseOnDocument from "./IEnterpriseOnDocument";
export default interface EnterpriseOnDocumentRepositoryInterface {
	create(entity: EnterpriseOnDocument[]): Promise<void>;
	findAll(): Promise<EnterpriseOnDocument[]>;
	findWithQuery(param: { enterpriseId?: string }): Promise<EnterpriseOnDocument[]>;
	update(enterpriseId: string, entity: Partial<EnterpriseOnDocument[]>): Promise<void>;
}
