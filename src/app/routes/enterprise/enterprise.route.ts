import { Router } from "express";
import { createEnterprise, findAllEnterprise } from "./enterprise.route.function";

export const enterpriseRouter = Router();

enterpriseRouter.post("/createEnterprise", createEnterprise);
enterpriseRouter.get("/findAllEnterprise", findAllEnterprise);
