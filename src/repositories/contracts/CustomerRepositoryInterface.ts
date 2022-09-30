import { Customer } from "src/entities/customer";

export interface CustomerRepositoryInterface {
    save(customer: Customer): Promise<void>
}