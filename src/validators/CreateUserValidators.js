const Joi = require('joi');

module.exports = async body => {
  const schema = Joi.object({
    name: Joi.string()
      .required(),
    last_name: Joi.string()
      .required(),
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .required()
      .min(6),
    confirm_password: Joi.string()
      .required()
      .min(6),
    phone_number: Joi.string()
      .required()
      .min(11),
    cep: Joi.string()
      .required()
  });
  try {
    return await schema.validateAsync(body);
  } catch (error) {
    return error;
  }
};
