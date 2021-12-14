const Joi = require("joi")

// Formato de cada campo
const id = Joi.number().integer()
const name = Joi.string().min(3).max(30)
const price = Joi.number().integer().min(1)
const description = Joi.string().min(3).max(200)
const status = Joi.boolean()
const image = Joi.string().uri()
const menuId = Joi.number().integer();
const labelId = Joi.number().integer();
const categoryId = Joi.number().integer()

const createFoodSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    status: status,
    image: image.required(),
    menuId: menuId.required(),
    labelId: labelId.required(),
    categoryId: categoryId.required()
})

const updateFoodSchema = Joi.object({
    name: name,
    price: price,
    description: description,
    status: status,
    image: image,
    labelId: labelId,
    categoryId: categoryId,
})

const getFoodSchema = Joi.object({
    id: id.required(),
})

module.exports = { createFoodSchema, updateFoodSchema, getFoodSchema }
