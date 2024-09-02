import { Router } from "express";
import { createUser, findAllUser } from "./user.route.function";

export const userRouter = Router();

userRouter.post("/createUser", createUser);
userRouter.get("/findAll", findAllUser);
