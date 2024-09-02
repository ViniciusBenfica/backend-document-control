import DocumentRepository from "../../infrastructure/document/document.repository";
import type { InputDocumentDto, OutputDocumentDto } from "./create.document.dto";

export async function createDocumentUseCase(input: InputDocumentDto): Promise<OutputDocumentDto> {
	const document = await DocumentRepository.create(input);
	return {
		id: document.id as string,
		title: input.title,
		description: input.description,
	};
}
