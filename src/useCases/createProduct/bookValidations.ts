import * as Joi from "joi";

export default Joi.object({
    title: Joi.string().min(3).max(30).required(),
    type: Joi.string().min(3).max(30).required(),
    salePrice: Joi.number().min(1).required(),
    rentPrice: Joi.number(),
    typeOfSale: Joi.string()
})