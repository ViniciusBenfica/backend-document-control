import type Document from "./IDocument";
export default interface DocumentRepositoryInterface {
	create(entity: Document): Promise<Document>;
	findAll(): Promise<Document[]>;
	find(id: string): Promise<Document>;
	update(entity: Partial<Document>): Promise<Document>;
}
