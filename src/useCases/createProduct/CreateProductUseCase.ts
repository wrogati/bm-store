import { Book } from "@entities/book";
import { Movie } from "@entities/movie";
import { ProductType } from "@entities/product";
import { BookRepository } from "@repositories/BookRepository";
import { MovieRepository } from "@repositories/MovieRepository";
import { CreateProductDTO } from "./CreateProductDTO";

class CreateProductUseCase {
  async execute(data: CreateProductDTO): Promise<void> {
    if (data.type === ProductType.movie) {
      const movieRepository = new MovieRepository();
      const movie = new Movie(data);
      await movieRepository.save(movie);
    }
    if (data.type === ProductType.book) {
      const bookRepository = new BookRepository();
      const book = new Book(data);
      await bookRepository.save(book);
    }
  }
}

export default new CreateProductUseCase();
