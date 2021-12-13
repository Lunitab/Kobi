const Joi = require("joi")

// Formato de cada campo
const id = Joi.number().integer()
const name = Joi.string().min(3).max(30)
const price = Joi.number().integer().min(1)
const description = Joi.string().min(3).max(200)
const image = Joi.string().uri()
const status = Joi.boolean()
// const menuId = Joi.number().integer();
// const categoryId = Joi.number().integer()

const createFoodSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    image: image.required(),
})

const updateFoodSchema = Joi.object({
    name: name,
    price: price,
    description: description,
    image: image,
})

const getFoodSchema = Joi.object({
    id: id.required(),
})

module.exports = { createFoodSchema, updateFoodSchema, getFoodSchema }
