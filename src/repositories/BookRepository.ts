import { Book } from "@entities/book";
import { Product } from "@models/index";
import { BookRepositoryInterface } from "./contracts/BookRepositoryInterface";

export class BookRepository implements BookRepositoryInterface {
  async save(movie: Book): Promise<void> {
    try {
      await Product.create({
        title: movie.title,
        type: movie.type,
        salePrice: movie.salePrice,
        typeOfSale: movie.typeOfSale,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
