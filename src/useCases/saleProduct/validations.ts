import * as Joi from "joi";

export default Joi.object({
    customerId: Joi.number().required(),
    items: Joi.array().min(1).required()
})