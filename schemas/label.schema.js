const Joi = require("joi")

// Formato de cada campo
const id = Joi.number().integer()
const name = Joi.string().max(50).required()
const image = Joi.string().uri()


const createLabelSchema = Joi.object({
    name: name.required(),
    image: image.required()
})

const updateLabelSchema = Joi.object({
    name: name,
    image: image
})

const getLabelSchema = Joi.object({
    id: id.required(),
})

module.exports = { createLabelSchema, updateLabelSchema, getLabelSchema }
