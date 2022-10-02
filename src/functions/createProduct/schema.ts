export default {
  type: "object",
  properties: {
    title: { type: 'string' },
    type: { type: 'string' },
    typeOfSale: { type: 'string' },
    rentPrice: { type: 'number' },
    salePrice: { type: 'number' },
  },
  required: ['title', 'type']
} as const;
