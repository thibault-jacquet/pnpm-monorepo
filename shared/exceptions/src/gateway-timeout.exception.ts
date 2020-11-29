import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class GatewayTimeoutException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Gateway Timeout'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.GATEWAY_TIMEOUT
      ),
      HTTP_STATUS.GATEWAY_TIMEOUT
    )
  }
}
