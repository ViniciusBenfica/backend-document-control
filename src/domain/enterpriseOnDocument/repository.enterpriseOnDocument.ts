import type EnterpriseOnDocument from "./IEnterpriseOnDocument";

export default interface EnterpriseOnDocumentRepositoryInterface {
	create(entity: EnterpriseOnDocument): Promise<void>;
}
