import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import schema from "./schema";
import CreateProductUseCase from "@useCases/createProduct/CreateProductUseCase";

const createPrtoduct: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
  const payload = {
    title: event.body.title,
    type: event.body.type,
    salePrice: event.body.salePrice,
    rentPrice: event.body.rentPrice,
    typeOfSale: event.body.typeOfSale,
  };

  try {
    await CreateProductUseCase.execute(payload);
  } catch (error) {
    return formatJSONResponse(400, {
      message: error.message,
    });
  }

  return formatJSONResponse(201, {
    message: `Product Created successfully!`,
  });
};

export const main = middyfy(createPrtoduct);
