import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class ConflictException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Conflict'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.CONFLICT
      ),
      HTTP_STATUS.CONFLICT
    )
  }
}
