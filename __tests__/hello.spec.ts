import { describe, it, expect } from '@jest/globals'
import { main } from '@functions/hello/handler'
import event from './mocks/event'

describe('Testing endpoint Hello', () => {
  it('it should return statusCode 200', async () => {
    const name = 'Lucas Dev'

    event.headers = { 'Content-Type': 'application/json' }
    event.httpMethod = 'post'
    event.body = JSON.stringify({ name })

    const { statusCode, body } = await main(event, {} as any, () => {})
    const { message } = JSON.parse(body)

    expect(statusCode).toBe(200)
    expect(message).toBe(
      `Hello ${name}, welcome to the exciting Serverless world!`
    )
  })
})
