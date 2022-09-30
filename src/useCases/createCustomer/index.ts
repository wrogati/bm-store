import { CustomerRepository } from "@repositories/CustomerRepository";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

const customerRepository = new CustomerRepository();

const createCustomerUseCase = new CreateCustomerUseCase(customerRepository);

export { createCustomerUseCase };