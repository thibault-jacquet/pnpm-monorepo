import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class NotImplementedException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Not Implemented'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.NOT_IMPLEMENTED
      ),
      HTTP_STATUS.NOT_IMPLEMENTED
    )
  }
}
