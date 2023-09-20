import Joi from "joi";

const eventSchema = Joi.object({
  title: Joi.string().min(1).required().messages({
    "string.empty": "O campo é obrigatório",
    "any.required": "O campo é obrigatório",
  }),
  date: Joi.string().min(1).required().messages({
    "string.empty": "A campo é obrigatória",
    "any.required": "A campo é obrigatória",
  }),
  description: Joi.string().min(1).required().messages({
    "string.empty": "A campo é obrigatória",
    "any.required": "A campo é obrigatória",
  }),
});

export default eventSchema;
