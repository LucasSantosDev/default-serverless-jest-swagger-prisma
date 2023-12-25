import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { Products } from '@repositories/products'

const readOneProduct = async (event) => {
  const { id } = event.pathParameters

  const productsRepository = new Products()
  const readOneProduct = await productsRepository.readOne(id)

  return formatJSONResponse(200, { data: readOneProduct })
}

export const main = middyfy(readOneProduct)
