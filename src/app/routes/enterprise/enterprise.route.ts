import { Router } from "express";
import { createEnterprise, findAllEnterprise, findEnterprise, updateEnterprise } from "./enterprise.route.function";

export const enterpriseRouter = Router();

enterpriseRouter.post("/createEnterprise", createEnterprise);
enterpriseRouter.get("/findAllEnterprise", findAllEnterprise);
enterpriseRouter.get("/findEnterprise/:id", findEnterprise);
enterpriseRouter.put("/updateEnterprise/:id", updateEnterprise);
