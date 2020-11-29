import {
  BadRequestException,
  HttpException,
  InternalServerErrorException
} from '@mimir/exceptions'
import { IMovie } from '@mimir/interfaces'
import {
  APIGatewayProxyEventV2,
  APIGatewayProxyResult,
  Context
} from 'aws-lambda'
import { config } from 'aws-sdk'

// DYNAMODB CONFIG + INIT
import dynamoConfig from './config/dynamo.config'
import { postHandle } from './services/post.handle'
import { validate } from './utils/validate'

// CONFIG
config.update({
  region: process.env.AWS_DEFAULT_REGION ?? 'eu-central-1',
  apiVersion: process.env.AWS_API_DEFAULT_VERSION ?? 'latest'
})

export const handler = async (
  event: APIGatewayProxyEventV2,
  _context?: Context
): Promise<APIGatewayProxyResult> => {
  try {
    const { body } = event
    if (!body) {
      throw new BadRequestException('Empty body')
    }
    const moviePayload: IMovie = JSON.parse(body)

    // Validation
    await validate(moviePayload)

    // Call Service Post Handle
    return postHandle(dynamoConfig, moviePayload)
  } catch (e) {
    let httpException: HttpException = e

    if (!(httpException instanceof HttpException)) {
      httpException = new InternalServerErrorException()
    }
    return {
      statusCode: httpException.getStatus(),
      body: JSON.stringify(httpException.getResponse())
    }
  }
}
