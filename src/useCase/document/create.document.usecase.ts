import DocumentRepository from "../../infrastructure/document/document.repository";
import type { InputDocumentDto, OutputDocumentDto } from "./create.document.dto";

export function createDocumentUseCase(input: InputDocumentDto): OutputDocumentDto {
	DocumentRepository.create(input);
	return {
		titulo: input.titulo,
		description: input.description,
	};
}
