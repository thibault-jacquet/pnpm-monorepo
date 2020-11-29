import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class UnprocessableEntityException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Unprocessable Entity'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.UNPROCESSABLE_ENTITY
      ),
      HTTP_STATUS.UNPROCESSABLE_ENTITY
    )
  }
}
