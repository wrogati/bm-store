import {
  formatJSONResponseCreated,
  formatJSONResponseError,
  ValidatedEventAPIGatewayProxyEvent,
} from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import schema from "./schema";
import { saleProductUseCase } from "@useCases/saleProduct";

const saleProduct: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const payload = {
    customerId: event.body.customerId,
    items: event.body.items
  };

  try {
    await saleProductUseCase.execute(payload);
  } catch (error) {
    return formatJSONResponseError(error);
  }

  return formatJSONResponseCreated({
    message: `Sale Created successfully!`,
  });
};

export const main = middyfy(saleProduct);
