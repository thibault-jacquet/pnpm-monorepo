import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class PreconditionFailedException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Precondition Failed'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.PRECONDITION_FAILED
      ),
      HTTP_STATUS.PRECONDITION_FAILED
    )
  }
}
