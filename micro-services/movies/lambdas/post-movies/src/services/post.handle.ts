import { IDynamoDBConfig, IMovie, IPutItemInput } from '@mimir/interfaces'
import { APIGatewayProxyResult } from 'aws-lambda'
import { v4 as uuidv4 } from 'uuid'

export const postHandle = async (
  { dynamoDB, tableName }: IDynamoDBConfig,
  moviePayload: IMovie
): Promise<APIGatewayProxyResult> => {
  const params: IPutItemInput<IMovie> = {
    TableName: tableName,
    Item: {
      movieId: uuidv4(),
      ...moviePayload
    }
  }
  await dynamoDB.put(params).promise()
  return {
    statusCode: 201,
    body: JSON.stringify(params.Item)
  }
}
