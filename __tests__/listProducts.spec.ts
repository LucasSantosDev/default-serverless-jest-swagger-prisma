import { describe, it, expect } from '@jest/globals'
import { main } from '@functions/listProducts/handler'
import event from './mocks/event'
import { prisma } from '@config/prisma'
import { PrismaPromise, Products } from '@prisma/client'

describe('Testing endpoint ListProducts', () => {
  it('it should return statusCode 200', async () => {
    const productsList = [
      {
        id: 1,
        name: 'Any name',
        createdAt: new Date(),
        updatedAt: new Date(),
      } as Products,
    ]

    jest
      .spyOn(prisma.products, 'findMany')
      .mockImplementationOnce(
        () => Promise.resolve(productsList) as PrismaPromise<Products[]>
      )

    event.httpMethod = 'get'

    const { statusCode, body } = await main(event, {} as any, () => {})
    const { data } = JSON.parse(body)

    expect(statusCode).toBe(200)
    expect(JSON.stringify(data)).toEqual(JSON.stringify(productsList))
  })
})
