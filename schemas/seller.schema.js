const Joi = require('joi');

// Formato de cada campo
const id = Joi.number().integer()
const name = Joi.string()
const username = Joi.string().min(3).max(15);
const email = Joi.string().email()
const password = Joi.string().min(8)

const createSellerSchema = Joi.object({
    name: name.required(),
    username: username.required(),
    email: email.required(),
    password: password.required()
})

const updateSellerSchema = Joi.object({
    email: email.required(),
})

const getUserSchema = Joi.object({
    id: id.required()
})

module.exports = { createSellerSchema, updateSellerSchema, getUserSchema }