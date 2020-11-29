import { IDynamoDBConfig } from '@mimir/interfaces'
import { TABLES } from '@mimir/tables'
import { DynamoDB } from 'aws-sdk'

export default {
  dynamoDB: new DynamoDB.DocumentClient({
    endpoint: process.env.AWS_SAM_LOCAL
      ? 'http://dynamodb-local:8000'
      : undefined
  }),
  tableName: process.env.TABLE_NAME ?? TABLES.MOVIE
} as IDynamoDBConfig
