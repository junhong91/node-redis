let Joi = require('joi')

module.exports = Joi.object().keys({
  title: Joi.string().required().error(() => 'must have name as string'),
  name: Joi.string().required().error(() => 'must have name as string'),
})
