import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomisableException extends HttpException {
    constructor(field: string, errorMessage: string, status: number) {
      super(messageConstructor(field, errorMessage), status);
    }
  }

  function messageConstructor(field: string, errorMessage: string) {
    const message = [
      {
        message: errorMessage,
        field: field,
      },
    ];
    return { message };
  }

  export class CustomNotFoundException extends HttpException {
    constructor(field: string) {
      super(messageConstructor(field, field + ' not found'), 404);
    }
  }