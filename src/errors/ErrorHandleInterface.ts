export interface ErrorInterface extends Error {
  getMessage(): string;
  getCode(): number;
  getBody(): object;
}

export interface ErrorDetails {
  details:{
    message: string,
    path: object
  }[]
}

export interface ValidationErrorsResponse {
  message: string;
  errors: {
    description: string;
    path: [];
  }
}

export interface ErrorValidationInterface extends ErrorInterface {
  setErrorMessages();
}
