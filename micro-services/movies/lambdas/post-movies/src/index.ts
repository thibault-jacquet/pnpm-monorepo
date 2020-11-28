import { IMovie, IPutItemInput, IPutItemOutput } from '@mimir/interfaces'
import { TABLES } from '@mimir/tables'
import {
  APIGatewayProxyEventV2,
  APIGatewayProxyResult,
  Context
} from 'aws-lambda'
import { AWSError, DynamoDB } from 'aws-sdk'
import { PromiseResult } from 'aws-sdk/lib/request'
import { v4 as uuidv4 } from 'uuid'

const dynamoDb = new DynamoDB.DocumentClient()

export const handler = async (
  event: APIGatewayProxyEventV2,
  _context: Context
): Promise<APIGatewayProxyResult> => {
  const { body } = event
  if (!body) {
    throw new Error()
  }
  const moviePayload: IMovie = JSON.parse(body)

  const params: IPutItemInput<IMovie> = {
    TableName: TABLES.MOVIE,
    Item: {
      id: uuidv4(),
      ...moviePayload
    }
  }

  try {
    const createdMovie = (await dynamoDb
      .put(params)
      .promise()) as PromiseResult<IPutItemOutput<IMovie>, AWSError>

    return {
      statusCode: 201,
      body: JSON.stringify(createdMovie.Attributes)
    }
  } catch (e) {
    console.log(e)
    return {
      statusCode: 500,
      body: 'Server Error'
    }
  }
}
