export interface CreateProductDTO {
  title: string;
  type: string;
  salePrice: number;
  rentPrice: number;
  daysForRent?: number;
  typeOfSale: string;
}
