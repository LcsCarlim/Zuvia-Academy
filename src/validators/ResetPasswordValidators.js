const Joi = require('joi');

module.exports = async body => {
  const schema = Joi.object({
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .required()
      .min(6)
  });
  try {
    return await schema.validate(body);
  } catch (error) {
    return error;
  }
};
