const Joi = require('joi');

// Formato de cada campo
const id = Joi.number().integer()
const name = Joi.string().min(3).max(40)
const status = Joi.boolean()
const image = Joi.string().uri()
// const sellerId = Joi.number().integer()
// const labelId = Joi.number().integer()

const createMenuSchema = Joi.object({
    name: name.required(),
    image: image.required(),
})

const updateMenuSchema = Joi.object({
    name: name,
    status: status,
    image: image,
})

const getMenuSchema = Joi.object({
    id: id.required(),
})

module.exports = { createMenuSchema, updateMenuSchema, getMenuSchema }