const Joi = require('joi');

const { createSellerSchema, updateSellerSchema } = require('./seller.schema');

// Formato de cada campo
const id = Joi.number().integer()
const name = Joi.string().min(3).max(40)
const status = Joi.boolean()
const location = Joi.string().min(3)
const image = Joi.string()
// const sellerId = Joi.number().integer()
const labelId = Joi.number().integer()
const categoryName = Joi.string().min(3).max(15)

const createMenuSchema = Joi.object({
    name: name.required(),
    status: status,
    location: location.required(),
    image: image.required(),    
    seller: createSellerSchema.required(),
    labelId: labelId.required(),
    category: Joi.object({
        name: categoryName.required(),
    }).required(),
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