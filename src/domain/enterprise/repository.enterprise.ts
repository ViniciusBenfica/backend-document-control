import type Enterprise from "./IEnterprise";
export default interface EnterpriseRepositoryInterface {
	create(entity: Enterprise): Promise<Enterprise>;
	findAll(): Promise<Enterprise[]>;
}
