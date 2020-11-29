import { HTTP_STATUS } from '@mimir/enums'

import { HttpException } from './http.exception'

export class UnsupportedMediaTypeException extends HttpException {
  constructor(
    objectOrError?: string | Record<string, any> | any,
    description = 'Unsupported Media Type'
  ) {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        HTTP_STATUS.UNSUPPORTED_MEDIA_TYPE
      ),
      HTTP_STATUS.UNSUPPORTED_MEDIA_TYPE
    )
  }
}
