import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class GoneException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Gone'
  ) {
    super(
      HttpException.createBody(objectOrError, description, HTTP_STATUS.GONE),
      HTTP_STATUS.GONE
    )
  }
}
