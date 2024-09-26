import DocumentRepository from "../../../infrastructure/document/document.repository";
import type { InputFindAllDocumentDto, OutputFindAllDocumentDto } from "./findAll.document.dto";

export async function findAllDocumentUseCase(input: InputFindAllDocumentDto): Promise<OutputFindAllDocumentDto[]> {
	const document = await DocumentRepository.findAll(input);

	return document.map((document) => {
		return {
			id: document.id as string,
			title: document.title,
			description: document.description,
		};
	});
}
