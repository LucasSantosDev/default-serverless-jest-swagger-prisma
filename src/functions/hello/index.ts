import schema from './schema'
import { handlerPath } from '@libs/handler-resolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'hello',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
        summary: 'Endpoint para dar um HelloWorld',
        description: 'Endpoint responsável por mostrar um hello world',
        swaggerTags: ['HelloWorld'],
        bodyType: 'HelloRequest',
        responseData: {
          200: {
            bodyType: 'HelloResponse',
            description: 'Success',
          },
        },
      },
    },
  ],
}
