import { HTTP_STATUS_CODE } from "src/enums/httpCodes";
import {
  ErrorDetails,
  ErrorValidationInterface,
  ValidationErrorsResponse,
} from "./ErrorHandleInterface";

export class ErrorValidationHandler implements ErrorValidationInterface {
  private errorMessages: any;
  name: string;
  message: string;
  stack?: string;
  cause?: unknown;
  constructor(private errorDetails: ErrorDetails) {
    this.setErrorMessages();
  }
  setErrorMessages() {
    this.errorMessages = this.errorDetails.details.map((i) => ({
      description: i.message,
      path: i.path,
    }));
  }

  getBody(): ValidationErrorsResponse {
    return {
      message: this.getMessage(),
      errors: this.errorMessages,
    };
  }
  getMessage(): string {
    return "Validation error";
  }
  getCode(): number {
    return HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY;
  }
}
