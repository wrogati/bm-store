import { Book } from "@entities/book";

export interface BookRepositoryInterface {
    save(data: Book): Promise<void>;
}