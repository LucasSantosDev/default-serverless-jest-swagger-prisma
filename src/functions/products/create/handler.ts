import {
  ValidatedEventAPIGatewayProxyEvent,
  formatJSONResponse,
} from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { Products } from '@repositories/products'
import schema from './schema'

const createProduct: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const productsRepository = new Products()
  const productCreated = await productsRepository.create(event.body)

  return formatJSONResponse(201, { data: productCreated })
}

export const main = middyfy(createProduct)
