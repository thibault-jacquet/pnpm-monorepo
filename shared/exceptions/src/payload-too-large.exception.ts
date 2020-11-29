import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class PayloadTooLargeException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Payload Too Large'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.PAYLOAD_TOO_LARGE
      ),
      HTTP_STATUS.PAYLOAD_TOO_LARGE
    )
  }
}
