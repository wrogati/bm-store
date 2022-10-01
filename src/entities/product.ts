export enum ProductType {
  movie = "MOVIE",
  book = "BOOK",
}

export abstract class Product {
  public title: string;
  public type: string;
  public salePrice: number;
  public rentPrice: number;
}
