import type { Request, Response } from "express";
import { createUserUseCase } from "../../../useCase/user/create/create.user.usecase";
import { findAllUserUseCase } from "../../../useCase/user/findAll/findAll.user.usecase";

export async function createUser(req: Request, res: Response) {
	const { name, cnpj, documentId, issueDate, dueDate } = req.body;
	const createUserDto = {
		name,
		cnpj,
		documentId,
		issueDate,
		dueDate,
	};
	const user = await createUserUseCase(createUserDto);
	return res.status(201).json(user);
}

export async function findAllUser(req: Request, res: Response) {
	const user = await findAllUserUseCase();
	return res.status(201).json(user);
}
