import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class ForbiddenException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Forbidden'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.FORBIDDEN
      ),
      HTTP_STATUS.FORBIDDEN
    )
  }
}
