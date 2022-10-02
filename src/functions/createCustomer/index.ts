import schema from "./schema";
import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "create-customer",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
        bodyType: "PostCreateCustomer",
        responseData: {
          201: {
            description: "Product created",
          },
          422: {
            description: "Validation Error",
          },
        },
      },
    },
  ],
};
