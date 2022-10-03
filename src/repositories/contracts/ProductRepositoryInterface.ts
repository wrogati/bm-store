export interface ProductRepositoryInterface {
  find(productId: number): Promise<any>;
  findWhere(type: string, title: string): Promise<any>;
}
