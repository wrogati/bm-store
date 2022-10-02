import { Product, ProductType } from "./product";

export enum TypeOfSale {
  sale = "SALE",
  rent = "RENT",
  both = "BOTH",
}

export class Movie extends Product {
  public typeOfSale: string;
  public daysForRent?: number;
  public type: string;

  constructor(props) {
    super();
    Object.assign(this, props);
    this.type = ProductType.movie;
  }
}
