const Joi = require('joi');

const prodeucSchema = Joi.object({

name: Joi.string().required().trim(),
img:Joi.string().trim(),
price: Joi.string().min(0).required(),
desc: Joi.string().trim()
});

const reviewSchema = Joi.object({
rating:Joi.string().min(0).max(5),
comment:Joi.string().trim()
})

module.exports={ prodeucSchema,reviewSchema} ;