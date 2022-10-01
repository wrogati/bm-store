import { Product } from "@entities/product";

export interface ProductRepositoryInterface {
    save(data: Product): Promise<void>;
}