import { Customer } from "@entities/customer";
import { CustomerRepositoryInterface } from "./contracts/CustomerRepositoryInterface";
import { Customer as CustomerModel } from "@models/index"

export class CustomerRepository implements CustomerRepositoryInterface {
    async save(customer: Customer): Promise<void> {
        try {
            await CustomerModel.create({
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
            });
        } catch (error) {
            throw Error(error.message)
        }
    }
}