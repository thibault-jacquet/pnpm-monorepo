import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class InternalServerErrorException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Internal Server Error'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      ),
      HTTP_STATUS.INTERNAL_SERVER_ERROR
    )
  }
}
