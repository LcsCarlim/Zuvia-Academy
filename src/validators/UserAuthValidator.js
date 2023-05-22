const Joi = require('joi');

module.exports = async body => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .required()
      .min(6)
  });
  try {
    return await schema.validateAsync(body);
  } catch (error) {
    return error;
  }
};
