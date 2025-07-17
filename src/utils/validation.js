import Joi from "joi";

const schema = Joi.object({
  id: Joi.string().required(),
  xa: Joi.number().required(),
  ya: Joi.number().required(),
  za: Joi.number().required()
});

export default { schema };