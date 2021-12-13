const Joi = require("joi")

// Formato de cada campo
const id = Joi.number().integer()
const name = Joi.string().max(20).required()

const createLabelSchema = Joi.object({
    id: id.required(),
    name: name.required(),
})

const updateLabelSchema = Joi.object({
    id: id.required(),
    name: name.required(),
})

const getLabelSchema = Joi.object({
    id: id.required(),
})

module.exports = { createLabelSchema, updateLabelSchema, getLabelSchema }
