import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class MethodNotAllowedException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Method Not Allowed'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.METHOD_NOT_ALLOWED
      ),
      HTTP_STATUS.METHOD_NOT_ALLOWED
    )
  }
}
