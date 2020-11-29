import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class BadGatewayException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Bad Gateway'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.BAD_GATEWAY
      ),
      HTTP_STATUS.BAD_GATEWAY
    )
  }
}
