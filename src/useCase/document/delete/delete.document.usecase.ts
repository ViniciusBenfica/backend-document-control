import DocumentRepository from "../../../infrastructure/document/document.repository";
import type { InputDeleteDocumentDto, OutputDeleteDocumentDto } from "./delete.document.dto";

export async function deleteDocumentUseCase(input: InputDeleteDocumentDto): Promise<OutputDeleteDocumentDto> {
	const document = await DocumentRepository.delete(input.id);

	return {
		id: document.id as string,
		title: document.title,
		description: document.description,
	};
}
