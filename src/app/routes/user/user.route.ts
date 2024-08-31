import { Router } from "express";
import { createUser } from "./user.route.function";

export const userRouter = Router();

userRouter.post("/createUser", createUser);
