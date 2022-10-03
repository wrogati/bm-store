import { Item } from "@repositories/contracts/SaleRepositoryInterface";

export class Sale {
    public customerId: number;
    public items: Item[];
    constructor(props) {
        Object.assign(this, props);
    }
}