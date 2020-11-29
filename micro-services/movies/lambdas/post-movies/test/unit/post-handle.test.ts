// Import all functions from put-item.js
import { APIGatewayProxyEventV2 } from 'aws-lambda'
import dynamodb from 'aws-sdk/clients/dynamodb'

import { handler } from '../../src/index'

import errorData from './data/error.data'
import movieData from './data/movie.data'

jest.mock('uuid', () => ({
  v4: () => movieData.movieId
}))

describe('[@movies] - POST HANDLER', () => {
  let putSpy: jest.SpyInstance

  beforeAll(() => {
    putSpy = jest.spyOn(dynamodb.DocumentClient.prototype, 'put')
    putSpy.mockReturnValue({
      promise: () => Promise.resolve(movieData)
    })
  })

  // Clean up mocks
  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('should fail with validation error', async () => {
    // const returnedItem = { id: 'id1', name: 'name1' }
    const expectedError = {
      statusCode: 400,
      body: JSON.stringify(errorData)
    }
    const event = ({
      httpMethod: 'POST',
      body: '{"id": "id1","name": "name1"}'
    } as unknown) as APIGatewayProxyEventV2

    expect(await handler(event)).toEqual(expectedError)
  })

  it('should add movie in table', async () => {
    const returnValue = {
      statusCode: 201,
      body: JSON.stringify(movieData)
    }

    const { movieId, ...movieWithoutId } = movieData
    const event = ({
      httpMethod: 'POST',
      body: JSON.stringify(movieWithoutId)
    } as unknown) as APIGatewayProxyEventV2

    expect(await handler(event)).toEqual(returnValue)
  })
})
