import type { FastifyInstance, FastifyPluginAsync } from "fastify";
import { findAllEnterpriseOnDocument } from "./enterpriseOnDocument.route.function";

export const enterpriseOnDocumentRouter: FastifyPluginAsync = async (fastify: FastifyInstance) => {
	fastify.get("/findAllEnterpriseOnDocument", findAllEnterpriseOnDocument);
};
