import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import schema from "./schema";
import { createCustomerUseCase } from "@useCases/createCustomer";
import customerRequest from "@useCases/createCustomer/validations";

const createCustomer: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
  const payload = {
    firstName: event.body.firstName,
    lastName: event.body.lastName,
    email: event.body.email,
  };

  const { error } = customerRequest.validate(payload, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map((i) => i.message);

    //TODO :: Improve error messages format
    return formatJSONResponse(422, {
      message: errorMessages,
    });
  }

  try {
    await createCustomerUseCase.execute(payload);
  } catch (error) {
    return formatJSONResponse(400, {
      message: error.message,
    });
  }

  return formatJSONResponse(201, {
    message: `Customer Created successfully!`,
  });
};

export const main = middyfy(createCustomer);
