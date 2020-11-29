import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class NotFoundException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Not Found'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.NOT_FOUND
      ),
      HTTP_STATUS.NOT_FOUND
    )
  }
}
