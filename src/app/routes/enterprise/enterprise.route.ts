import type { FastifyInstance, FastifyPluginAsync } from "fastify";
import {
	createEnterprise,
	deleteEnterprise,
	findAllEnterprise,
	findEnterprise,
	updateEnterprise,
} from "./enterprise.route.function";

export const enterpriseRouter: FastifyPluginAsync = async (fastify: FastifyInstance) => {
	fastify.post("/createEnterprise", createEnterprise);
	fastify.get("/findAllEnterprise", findAllEnterprise);
	fastify.get("/findEnterprise/:id", findEnterprise);
	fastify.put("/updateEnterprise/:id", updateEnterprise);
	fastify.delete("/deleteEnterprise/:id", deleteEnterprise);
};
