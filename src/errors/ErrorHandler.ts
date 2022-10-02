import { HTTP_STATUS_CODE } from "src/enums/httpCodes";
import { ErrorInterface } from "./ErrorHandleInterface";
import { ErrorValidationHandler } from "./ErrorValidationHandler";
import { MovieNotSavedError } from "./Product/MovieNotSavedError";

export class ErrorHandler implements ErrorInterface {
  name: string;
  message: string;
  code: number;
  stack?: string;
  cause?: unknown;
  validationErrors?: [];
  body: object;

  constructor(private error) {
    this.render();
  }

  getBody(): object {
    return this.body;
  }

  getMessage(): string {
    return this.message;
  }
  getCode(): number {
    return this.code;
  }

  render(): void {
    if (this.error instanceof MovieNotSavedError) {
      this.body = { message: this.error.message };
      this.code = this.error.code;
      return;
    }
    if (this.error instanceof ErrorValidationHandler) {
      this.body = this.error.getBody();
      this.code = this.error.getCode();
      return;
    }
    this.body = {
      message: "Server Error",
    };
    this.code = HTTP_STATUS_CODE.SERVER_ERROR
  }
}
