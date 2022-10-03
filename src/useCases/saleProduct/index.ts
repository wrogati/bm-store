import { ProductRepository } from "@repositories/ProductRepository";
import { SaleRepository } from "@repositories/SaleRepository";
import { SaleProductUseCase } from "./SaleProductUseCase";

const saleRepository = new SaleRepository();
const productRepository = new ProductRepository();

const saleProductUseCase = new SaleProductUseCase(saleRepository, productRepository);

export { saleProductUseCase };