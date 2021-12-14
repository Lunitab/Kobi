const Joi = require('joi');

// Formato de cada campo
const id = Joi.number().integer()
const name = Joi.string().min(3).max(40)
const status = Joi.boolean()
const location = Joi.string().min(3).max(40)
const image = Joi.string().uri()
const sellerId = Joi.number().integer()
const labelId = Joi.number().integer()

const createMenuSchema = Joi.object({
    name: name.required(),
    status: status,
    location: location.required(),
    image: image.required(),    
    sellerId: sellerId.required(),
    labelId: labelId.required()
})

const updateMenuSchema = Joi.object({
    name: name,
    status: status,
    location: location,
    image: image,
    labelId: labelId,
})

const getMenuSchema = Joi.object({
    id: id.required(),
})

module.exports = { createMenuSchema, updateMenuSchema, getMenuSchema }