import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import type { FromSchema } from "json-schema-to-ts";
import { HTTP_STATUS_CODE } from "src/enums/httpCodes";
// import { ErrorInterface } from "src/errors/ErrorHandleInterface";
import { ErrorHandler } from "src/errors/ErrorHandler";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, "body"> & {
  body: FromSchema<S>;
};
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<
  ValidatedAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;

export const formatJSONResponse = (
  statusCode: number,
  response: Record<string, unknown>
) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify(response),
  };
};

export const formatJSONResponseOK = (
  response: Record<string, unknown>
) => {
  return {
    statusCode: HTTP_STATUS_CODE.OK,
    body: JSON.stringify(response),
  };
};

export const formatJSONResponseCreated = (
  response: Record<string, unknown>
) => {
  return {
    statusCode: HTTP_STATUS_CODE.CREATED,
    body: JSON.stringify(response),
  };
};

export const formatJSONResponseDestroyed = () => {
  return {
    statusCode: HTTP_STATUS_CODE.NO_CONTENT,
    body: {},
  };
};

export const formatJSONResponseError = (error) => {
  const errorHandler = new ErrorHandler(error);

  return {
    statusCode: errorHandler.getCode(),
    body: JSON.stringify(errorHandler.getBody())
  };
};
