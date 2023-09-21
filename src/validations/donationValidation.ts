import Joi from "joi";

const donationSchema = Joi.object({
  name: Joi.string().required().min(2).max(50).messages({
    "string.base": "O campo deve ser uma string.",
    "string.empty": "O campo não pode estar vazio.",
    "string.min": "O campo deve ter pelo menos {#limit} caracteres.",
    "string.max": "O campo não pode ter mais de {#limit} caracteres.",
    "any.required": "O campo é obrigatório.",
  }),
  donatedAmount: Joi.number()
    .required()
    .messages({
      "number.base": "O campo deve ser um número.",
      "number.empty": "O campo não pode estar vazio.",
      "any.required": "O campo é obrigatório.",
    }),
});

export default donationSchema;
