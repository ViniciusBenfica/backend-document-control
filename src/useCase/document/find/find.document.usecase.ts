import DocumentRepository from "../../../infrastructure/document/document.repository";
import type { InputFindDocumentDto, OutputFindDocumentDto } from "./find.document.dto";

export async function findDocumentUseCase(input: InputFindDocumentDto): Promise<OutputFindDocumentDto> {
	const document = await DocumentRepository.find(input.id);

	return {
		id: document.id as string,
		title: document.title,
		description: document.description,
	};
}
