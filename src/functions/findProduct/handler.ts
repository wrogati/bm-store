import {
  formatJSONResponseError,
  formatJSONResponseOK,
  ValidatedEventAPIGatewayProxyEvent,
} from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import schema from "./schema";
import { findProductUseCase } from "@useCases/findProduct";

const findProduct: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const payload = {
    type: event.queryStringParameters.type,
    title: event.queryStringParameters.title,
  };

  try {
    const products = await findProductUseCase.execute(payload);

    return formatJSONResponseOK({
      data: products,
    });
  } catch (error) {
    return formatJSONResponseError(error);
  }
};

export const main = middyfy(findProduct);
