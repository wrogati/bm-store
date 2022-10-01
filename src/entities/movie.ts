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
    if (this.daysForRent) {
      this.setRentPrice();
    }
    this.type = ProductType.movie;
  }

  private setRentPrice() {
    let calcTenPercent = 0.1 * this.rentPrice;
    this.rentPrice = this.rentPrice + calcTenPercent * this.daysForRent;
  }
}
