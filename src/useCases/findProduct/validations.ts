import * as Joi from "joi";

export default Joi.object({
    type: Joi.string(),
    title: Joi.string()
})