export default {
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
    },
    required: ['name'],
  },
} as const
