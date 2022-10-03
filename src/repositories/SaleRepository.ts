import { Sale } from "@entities/sale";
import { Sale as SaleModel } from "@models/index";
import { SaleItems } from "@models/index";
import {
  Item,
  SaleRepositoryInterface,
} from "./contracts/SaleRepositoryInterface";

export class SaleRepository implements SaleRepositoryInterface {
  async update(data: { id: number; amount: number }): Promise<void> {
    try {
      await SaleModel.update(
        { amount: data.amount },
        { where: { id: data.id } }
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async save(sale: Sale): Promise<number> {
    try {
      const { dataValues } = await SaleModel.create({
        customerId: sale.customerId,
        status: "pending",
        amount: 0,
      });

      return dataValues.id;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async addItem(item: Item, saleId: number): Promise<void> {
    try {
      await SaleItems.create({
        unitPrice: item.unitPrice,
        daysOfRent: item?.daysOfRent,
        typeOfSale: item.typeOfSale,
        productId: item.productId,
        quantity: item.quantity,
        saleId: saleId,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
