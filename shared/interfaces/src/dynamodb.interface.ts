import {
  AttributeMap,
  PutItemInput,
  PutItemOutput
} from 'aws-sdk/clients/dynamodb'

export interface IPutItemInput<T extends AttributeMap> extends PutItemInput {
  Item: T
}

export interface IPutItemOutput<T extends AttributeMap> extends PutItemOutput {
  Attributes: T
}
