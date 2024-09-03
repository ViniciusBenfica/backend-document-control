import DocumentRepository from "../../../infrastructure/document/document.repository";
import type { OutputFindAllDocumentDto } from "./findAll.document.dto";

export async function findAllDocumentUseCase(): Promise<OutputFindAllDocumentDto[]> {
	const document = await DocumentRepository.findAll();

	return document.map((document) => {
		return {
			id: document.id as string,
			title: document.title,
			description: document.description,
		};
	});
}
