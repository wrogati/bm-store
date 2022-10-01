import { Product, ProductType } from "./product";

export enum TypeOfSale {
  sale = "SALE",
}

export class Book extends Product {
  public typeOfSale: string;
  public daysForRent?: number;
  public type: string;

  constructor(props) {
    super();
    Object.assign(this, props);
    this.type = ProductType.book;
  }
}
