import UserRepository from "../../infrastructure/user/user.repository";
import type { InputUserDto, OutputUserDto } from "./create.user.dto";

export function createUserUseCase(input: InputUserDto): OutputUserDto {
	UserRepository.create(input);
	return {
		name: input.name,
		cnpj: input.cnpj,
	};
}
