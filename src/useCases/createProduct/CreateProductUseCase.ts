import { Book } from "@entities/book";
import { Movie } from "@entities/movie";
import { ProductType } from "@entities/product";
import { BookRepository } from "@repositories/BookRepository";
import { MovieRepository } from "@repositories/MovieRepository";
import { ErrorValidationHandler } from "src/errors/ErrorValidationHandler";
import bookValidations from "./bookValidations";
import { CreateProductDTO } from "./CreateProductDTO";
import movieValidations from "./movieValidations";

class CreateProductUseCase {
  async execute(data: CreateProductDTO): Promise<void> {
    try {
      if (data.type === ProductType.movie) {
        const { error } = movieValidations.validate(data, {
          abortEarly: false,
        });

        if (error) {
          throw new ErrorValidationHandler(error);
        }

        const movieRepository = new MovieRepository();
        const movie = new Movie(data);
        await movieRepository.save(movie);
      }
      if (data.type === ProductType.book) {
        const { error } = bookValidations.validate(data, { abortEarly: false });

        if (error) {
          throw new ErrorValidationHandler(error);
        }

        const bookRepository = new BookRepository();
        const book = new Book(data);
        await bookRepository.save(book);
      }
    } catch (error) {
      throw error;
    }
  }
}

export default new CreateProductUseCase();
