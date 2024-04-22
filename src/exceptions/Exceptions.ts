import createHttpError from "http-errors";
import { ERROR_MESSAGES } from "../constants";

export class BadRequestException {
    constructor(message = ERROR_MESSAGES.BAD_REQUEST) {
      throw createHttpError(400, message);
    }
}

export class InternalServerException {
  constructor(message = ERROR_MESSAGES.INTERNAL_SERVER_ERROR) {
    throw createHttpError(500, message);
  }
}

export class UnauthorizedException {
  constructor(message = ERROR_MESSAGES.UNAUTHORIZED) {
    throw createHttpError(401, message);
  }
}

