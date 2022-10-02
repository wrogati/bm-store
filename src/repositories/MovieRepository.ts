import { Movie } from "@entities/movie";
import { MovieRepositoryInterface } from "./contracts/MovieRepositoryInterface";
import { Product } from "@models/index";
import { MovieNotSavedError } from "src/errors/Product/MovieNotSavedError";

export class MovieRepository implements MovieRepositoryInterface {
  async save(movie: Movie): Promise<void> {
    try {
      await Product.create({
        title: movie.title,
        type: movie.type,
        salePrice: movie.salePrice,
        rentPrice: movie.rentPrice,
        typeOfSale: movie.typeOfSale,
      });
    } catch (error) {
      throw new MovieNotSavedError(error.message, 400);
    }
  }
}