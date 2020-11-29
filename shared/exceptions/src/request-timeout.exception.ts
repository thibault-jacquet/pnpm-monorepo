import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class RequestTimeoutException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Request Timeout'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.REQUEST_TIMEOUT
      ),
      HTTP_STATUS.REQUEST_TIMEOUT
    )
  }
}
