import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class ImATeapotException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = `I'm a teapot`
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.I_AM_A_TEAPOT
      ),
      HTTP_STATUS.I_AM_A_TEAPOT
    )
  }
}
