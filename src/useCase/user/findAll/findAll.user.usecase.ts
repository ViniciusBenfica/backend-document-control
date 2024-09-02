import UserRepository from "../../../infrastructure/user/user.repository";
import type { OutputFindAllUserDto } from "./findAll.user.dto";

export async function findAllUserUseCase(): Promise<OutputFindAllUserDto[]> {
	const users = await UserRepository.findAll();

	return users.map((user) => {
		return {
			name: user.name,
			cnpj: user.cnpj,
		};
	});
}
