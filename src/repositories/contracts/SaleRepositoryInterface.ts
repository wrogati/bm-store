import { Sale } from "@entities/sale";

export interface SaleRepositoryInterface {
  save(data: Sale): Promise<number>;
  addItem(item: Item, saleId: number): Promise<void>;
  update(data: { id: number; amount: number }): Promise<void>;
}

export interface Item {
  productId: number;
  quantity: number;
  unitPrice: number;
  daysOfRent?: number;
  typeOfSale: string;
}
