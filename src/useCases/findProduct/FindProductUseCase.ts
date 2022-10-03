import { FindProductDTO } from "./FindProductDTO";
import { ProductRepositoryInterface } from "@repositories/contracts/ProductRepositoryInterface";

export class FindProductUseCase {
  constructor(private productRepository: ProductRepositoryInterface) {}
  async execute(data: FindProductDTO): Promise<void> {
    try {
      const product = await this.productRepository.findWhere(
        data.type,
        data.title
      );
      return product;
    } catch (error) {
      throw error;
    }
  }
}
