import type Document from "./IDocument";
export default interface DocumentRepositoryInterface {
	create(entity: Document): Promise<Document>;
	findAll(): Promise<Document[]>;
}
