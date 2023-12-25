import { describe, it, expect } from '@jest/globals'
import { main } from '@functions/products/delete/handler'
import event from './mocks/event'
import { prisma } from '@config/prisma'

describe('Testing endpoint DeleteProduct', () => {
  it('it should return statusCode 204', async () => {
    jest
      .spyOn(prisma.products, 'delete')
      .mockImplementationOnce(() => undefined)

    event.httpMethod = 'delete'

    const { statusCode, body } = await main(event, {} as any, () => {})

    expect(statusCode).toBe(204)
    expect(body).toBeUndefined()
  })
})
