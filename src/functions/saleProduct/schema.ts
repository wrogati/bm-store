export default {
  type: "object",
  properties: {
    customerId: { type: 'number' },
    items: { type: 'array' },
  },
  required: ['customerId', 'items']
} as const;
