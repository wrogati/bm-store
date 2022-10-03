import { Item } from "@repositories/contracts/SaleRepositoryInterface";

export interface SaleProductDTO {
  customerId: number;
  items: Item [];
}
