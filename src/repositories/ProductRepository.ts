import { ProductRepositoryInterface } from "./contracts/ProductRepositoryInterface";
import { Product as ProductModel } from "@models/index";
import { Op } from "sequelize";

export class ProductRepository implements ProductRepositoryInterface {
  async findWhere(type: string, title: string): Promise<any> {
    const dataValues = await ProductModel.findAll({
      where: {
        [Op.or]: [
          { type },
          { title }
        ]
      }
    });

    return dataValues;
  }
  async find(productId: number): Promise<any> {
    try {
      const { dataValues } = await ProductModel.findOne({ where: { id: productId } });
      return dataValues;
    } catch (error) {
      throw (error);
    }
  }
}
