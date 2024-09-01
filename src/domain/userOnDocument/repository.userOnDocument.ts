import type UserOnDocument from "./IUserOnDocument";

export default interface UserOnDocumentRepositoryInterface {
	create(entity: UserOnDocument): Promise<void>;
}
