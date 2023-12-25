import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { Products } from '@repositories/products'

const deleteProduct = async (event) => {
  const { id } = event.pathParameters

  const productsRepository = new Products()
  await productsRepository.delete(id)

  return formatJSONResponse(204)
}

export const main = middyfy(deleteProduct)
