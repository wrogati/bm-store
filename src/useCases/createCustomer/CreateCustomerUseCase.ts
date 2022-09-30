import { CustomerRepositoryInterface } from "@repositories/contracts/CustomerRepositoryInterface"
import { CreateCustomerDTO } from "./CreateCustomerDTO";

export class CreateCustomerUseCase {
    constructor(
        private CustomerRepository: CustomerRepositoryInterface
    ){}

    async execute(data: CreateCustomerDTO) {
        await this.CustomerRepository.save(data);
    }
}