import { Movie } from "@entities/movie";

export interface MovieRepositoryInterface {
    save(movie: Movie): Promise<void>
}