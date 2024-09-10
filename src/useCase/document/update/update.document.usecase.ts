import DocumentRepository from "../../../infrastructure/document/document.repository";
import type { InputUpdateDocumentDto, OutputUpdateDocumentDto } from "./update.document.dto";

export async function updateDocumentUseCase(input: InputUpdateDocumentDto): Promise<OutputUpdateDocumentDto> {
	const document = await DocumentRepository.update(input);

	return {
		id: document.id as string,
		title: document.title,
		description: document.description,
	};
}
