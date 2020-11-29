// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
import { isObject, isString } from '@mimir/utils'

export class HttpException extends Error {
  constructor(
    private readonly response: string | Record<string, any>,
    private readonly status: number
  ) {
    super()
    this.initMessage()
  }

  public initMessage(): void {
    if (isString(this.response)) {
      this.message = this.response
    } else if (
      isObject(this.response) &&
      isString((this.response as Record<string, any>).message)
    ) {
      this.message = (this.response as Record<string, any>).message
    }
  }

  public getResponse(): string | Record<string, any> {
    return this.response
  }

  public getStatus(): number {
    return this.status
  }

  public static createBody(
    objectOrError: Record<string, any> | string,
    description?: string,
    statusCode?: number
  ): Record<string, any> {
    if (!objectOrError) {
      return { statusCode, message: description }
    }
    return isObject(objectOrError) && !Array.isArray(objectOrError)
      ? objectOrError
      : { statusCode, message: objectOrError, error: description }
  }
}
