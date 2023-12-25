import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from 'aws-lambda'
import type { FromSchema } from 'json-schema-to-ts'

type PayloadRequest = {
  body?: unknown
  pathParameters?: unknown
  queryStringParameters?: unknown
}

type ValidatedAPIGatewayProxyEvent<S extends PayloadRequest> = Omit<
  APIGatewayProxyEvent,
  'body' | 'pathParameters' | 'queryStringParameters'
> & {
  body: FromSchema<S['body']>
  pathParameters: FromSchema<S['pathParameters']>
  queryStringParameters: FromSchema<S['queryStringParameters']>
}
export type ValidatedEventAPIGatewayProxyEvent<S extends PayloadRequest> =
  Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

export const formatJSONResponse = (
  statusCode: number,
  response?: Record<string, unknown>
) => {
  return {
    statusCode,
    body: response ? JSON.stringify(response) : undefined,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
    },
  }
}
