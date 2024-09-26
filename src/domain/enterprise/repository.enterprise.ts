import type Enterprise from "./IEnterprise";
export default interface EnterpriseRepositoryInterface {
	create(entity: Enterprise): Promise<Enterprise>;
	findAll(entity: Partial<Enterprise>): Promise<Enterprise[]>;
	find(id: string): Promise<Enterprise>;
	update(entity: Partial<Enterprise>): Promise<Enterprise>;
	delete(id: string): Promise<Enterprise>;
}
