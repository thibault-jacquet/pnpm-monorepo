import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class NotAcceptableException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Not Acceptable'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.NOT_ACCEPTABLE
      ),
      HTTP_STATUS.NOT_ACCEPTABLE
    )
  }
}
