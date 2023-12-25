import schema from './schema'
import { handlerPath } from '@libs/handler-resolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'products',
        summary: 'Criar produto',
        description: 'Endpoint responsável por criar produto',
        swaggerTags: ['Products'],
        cors: true,
        request: {
          schemas: {
            'application/json': schema,
          },
        },
        bodyType: 'ProductCreateRequest',
        responseData: {
          201: {
            bodyType: 'ProductCreateResponse',
            description: 'Success',
          },
        },
      },
    },
  ],
}
