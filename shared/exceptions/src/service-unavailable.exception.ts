import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class ServiceUnavailableException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Service Unavailable'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.SERVICE_UNAVAILABLE
      ),
      HTTP_STATUS.SERVICE_UNAVAILABLE
    )
  }
}
