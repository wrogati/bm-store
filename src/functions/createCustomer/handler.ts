import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { Customer } from "@models/index";

const createCustomer: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const payload = {
    firstName: event.body.firstName,
    lastName: event.body.lastName,
    email: event.body.email,
  };

  await Customer.create(payload);

  return formatJSONResponse(201,{
    message: `Customer Created successfully!`,
  });
};

export const main = middyfy(createCustomer);
