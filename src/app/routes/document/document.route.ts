import type { FastifyInstance, FastifyPluginAsync } from "fastify";
import { createDocument, deleteDocument, findAllDocument, findDocument, updateDocument } from "./document.route.function";

export const documentRouter: FastifyPluginAsync = async (fastify: FastifyInstance) => {
	fastify.post("/createDocument", createDocument);
	fastify.get("/findAllDocument", findAllDocument);
	fastify.get("/findDocument/:id", findDocument);
	fastify.put("/updateDocument/:id", updateDocument);
	fastify.delete("/deleteDocument/:id", deleteDocument);
};
