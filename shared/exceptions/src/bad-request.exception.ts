import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class BadRequestException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Bad Request'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.BAD_REQUEST
      ),
      HTTP_STATUS.BAD_REQUEST
    )
  }
}
