const Joi = require("joi")

// Formato de cada campo
const id = Joi.number().integer()
const name = Joi.string().max(50)
const description = Joi.string()
const image = Joi.string()


const createLabelSchema = Joi.object({
    name: name.required(),
    description: description.required(),
    image: image.required()
})

const updateLabelSchema = Joi.object({
    name: name,
    description: description,
    image: image
})

const getLabelSchema = Joi.object({
    id: id.required(),
})

module.exports = { createLabelSchema, updateLabelSchema, getLabelSchema }
