import schema from './schema'
import { handlerPath } from '@libs/handler-resolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'put',
        path: 'products/{id}',
        summary: 'Atualizar produto',
        description: 'Endpoint responsável por atualizar o produto',
        swaggerTags: ['Products'],
        cors: true,
        request: {
          schemas: { 'application/json': schema },
        },
        bodyType: 'ProductUpdateRequest',
        responseData: {
          200: {
            bodyType: 'ProductUpdateResponse',
            description: 'Success',
          },
        },
      },
    },
  ],
}
