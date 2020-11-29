import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class HttpVersionNotSupportedException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'HTTP Version Not Supported'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.HTTP_VERSION_NOT_SUPPORTED
      ),
      HTTP_STATUS.HTTP_VERSION_NOT_SUPPORTED
    )
  }
}
