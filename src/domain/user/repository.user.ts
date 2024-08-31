import type User from "./IUser";

export default interface UserRepositoryInterface {
	create(entity: User): Promise<void>;
}
