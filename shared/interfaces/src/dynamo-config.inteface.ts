import { DynamoDB } from 'aws-sdk'

export interface IDynamoDBConfig {
  dynamoDB: DynamoDB.DocumentClient
  tableName: string
}
