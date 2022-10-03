import { ErrorValidationHandler } from "src/errors/ErrorValidationHandler";
import validations from "./validations";
import { SaleProductDTO } from "./SaleProductDTO";
import { SaleRepositoryInterface } from "@repositories/contracts/SaleRepositoryInterface";
import { ProductRepositoryInterface } from "@repositories/contracts/ProductRepositoryInterface";

export class SaleProductUseCase {
  constructor(
    private saleRepository: SaleRepositoryInterface,
    private productRepository: ProductRepositoryInterface
  ) {}
  async execute(data: SaleProductDTO): Promise<void> {
    try {
      const { error } = validations.validate(data, { abortEarly: false });

      if (error) {
        throw new ErrorValidationHandler(error);
      }

      const saleId = await this.saleRepository.save(data);

      let amount = 0;
      data.items.map(async (i) => {
        const productData = await this.productRepository.find(i.productId);

        let unitPrice = 0;
        if (String(productData.typeOfSale).toUpperCase() === "RENT") {
          unitPrice = productData.rentPrice;
        } else if (String(productData.typeOfSale).toUpperCase() === "SALE") {
          unitPrice = productData.salePrice;
        }

        amount = amount + i.quantity * unitPrice;
        await this.saleRepository.addItem(
          {
            productId: i.productId,
            quantity: i.quantity,
            unitPrice: unitPrice,
            daysOfRent: i.daysOfRent,
            typeOfSale: i.typeOfSale,
          },
          saleId
        );
      });

      await this.saleRepository.update({ id: saleId, amount: amount });
    } catch (error) {
      throw error;
    }
  }
}
