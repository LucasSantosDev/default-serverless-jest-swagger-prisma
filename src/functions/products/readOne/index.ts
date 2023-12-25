import { handlerPath } from '@libs/handler-resolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products/{id}',
        summary: 'Listar dados do produto',
        description: 'Endpoint responsável por listar dados do produto',
        swaggerTags: ['Products'],
        responseData: {
          200: {
            bodyType: 'ProductReadOneResponse',
            description: 'Success',
          },
        },
      },
    },
  ],
}
