import { handlerPath } from '@libs/handler-resolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'products/{id}',
        summary: 'Remover o produto',
        description: 'Endpoint responsável por remover o produto',
        swaggerTags: ['Products'],
        responseData: {
          204: { description: 'Success' },
        },
      },
    },
  ],
}
