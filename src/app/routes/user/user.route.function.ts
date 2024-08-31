import type { Request, Response } from "express";
import { createUserUseCase } from "../../../useCase/user/create.user.usecase";

export function createUser(req: Request, res: Response) {
	const { name, cnpj } = req.body;
	const createUseDto = {
		name,
		cnpj,
	};
	const user = createUserUseCase(createUseDto);

	return res.status(201).json(user);
}
