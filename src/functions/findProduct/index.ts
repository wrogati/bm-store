import schema from "./schema";
import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "find-product",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
        responseData: {
          200: {
            description: "",
          },
          422: {
            description: "Validation Error",
          },
        },
      },
    },
  ],
};
