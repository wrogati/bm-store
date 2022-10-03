import { ProductRepository } from "@repositories/ProductRepository";
import { FindProductUseCase } from "./FindProductUseCase";

const productRepository = new ProductRepository();

const findProductUseCase = new FindProductUseCase(productRepository);

export { findProductUseCase };