import {
  ValidatedEventAPIGatewayProxyEvent,
  formatJSONResponse,
} from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { Products } from '@repositories/products'
import schema from './schema'

const updateProduct: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const { id } = event.pathParameters

  const productsRepository = new Products()
  const productCreated = await productsRepository.update(id, event.body)

  return formatJSONResponse(200, { data: productCreated })
}

export const main = middyfy(updateProduct)
