import schema from "./schema";
import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "create-product",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
        bodyType: "PostCreateProduct",
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
