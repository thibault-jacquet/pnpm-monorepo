import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class UnauthorizedException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Unauthorized'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.UNAUTHORIZED
      ),
      HTTP_STATUS.UNAUTHORIZED
    )
  }
}
