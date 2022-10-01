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

  // const { error } = customerRequest.validate(payload, { abortEarly: false });

  // if (error) {
  //   const errorMessages = error.details.map((i) => i.message);

  //   //TODO :: Improve error messages format
  //   return formatJSONResponse(422, {
  //     message: errorMessages,
  //   });
  // }

  try {
    await CreateProductUseCase.execute(payload);
  } catch (error) {
    return formatJSONResponse(400, {
      message: error.message,
    });
  }

  return formatJSONResponse(201, {
    message: `${String(event.body.type).toUpperCase} Created successfully!`,
  });
};

export const main = middyfy(createPrtoduct);
