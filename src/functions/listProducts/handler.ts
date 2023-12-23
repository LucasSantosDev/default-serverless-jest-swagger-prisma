import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { Products } from '@repositories/products'

const listProducts = async () => {
  const productsRepository = new Products()
  const allProducts = await productsRepository.read()

  return formatJSONResponse({ data: allProducts })
}

export const main = middyfy(listProducts)
