import schema from "./schema";
import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "sale-product",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
        bodyType: "PostSaleProduct",
        responseData: {
          201: {
            description: "Sale created",
          },
          422: {
            description: "Validation Error",
          },
        },
      },
    },
  ],
};
