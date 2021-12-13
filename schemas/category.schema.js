const Joi = require("joi")

// Formato de cada campo
const id = Joi.number().integer()
const name = Joi.string().min(3).max(15)
// const menuId = Joi.number().integer();

const createCategorySchema = Joi.object({
    name: name.required(),
    // menuId: menuId.required(),
})

const updateCategorySchema = Joi.object({
    name: name,
})

const getCategorySchema = Joi.object({
    id: id.required(),
})

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema }
