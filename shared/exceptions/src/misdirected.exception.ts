import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class MisdirectedException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Misdirected'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.MISDIRECTED
      ),
      HTTP_STATUS.MISDIRECTED
    )
  }
}
