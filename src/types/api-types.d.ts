export interface PostCreateCustomer {
  firstName: string;
  lastName: string;
  email: string;
}

export interface PostCreateProduct {
  title: string;
  type: string;
  salePrice: number;
  rentPrice?: number;
  daysForRent?: number;
  typeOfSale: string;
}