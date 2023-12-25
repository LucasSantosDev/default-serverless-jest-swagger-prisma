import { handlerPath } from '@libs/handler-resolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products',
        summary: 'Listar todos os produtos',
        description:
          'Endpoint responsável por listar todos os produtos sem paginação',
        swaggerTags: ['Products'],
        responseData: {
          200: {
            bodyType: 'ProductsListResponse',
            description: 'Success',
          },
        },
      },
    },
  ],
}
