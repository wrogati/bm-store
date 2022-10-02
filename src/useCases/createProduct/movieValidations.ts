import * as Joi from "joi";

export default Joi.object({
    title: Joi.string().min(3).max(30).required(),
    type: Joi.string().min(3).max(30).required(),
    typeOfSale: Joi.string().required(),
    salePrice: Joi.number(),
    rentPrice: Joi.number(),
})