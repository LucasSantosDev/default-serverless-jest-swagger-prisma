export default {
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
    },
    required: ['name'],
  },
  pathParameters: {
    type: 'object',
    properties: {
      id: { type: 'number' },
    },
    required: ['id'],
  },
} as const
