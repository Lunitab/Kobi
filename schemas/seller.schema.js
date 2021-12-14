const Joi = require('joi');

// Formato de cada campo
const id = Joi.number().integer()
const name = Joi.string()
const username = Joi.string().min(3).max(15);
const email = Joi.string().email()
const phone = Joi.string().min(9).max(15);
const password = Joi.string().min(8)

const createSellerSchema = Joi.object({
    name: name.required(),
    username: username.required(),
    email: email.required(),
    phone: phone.required(),
    password: password.required()
})

const updateSellerSchema = Joi.object({
    username: username,
    email: email,
    phone: phone,
})

const getSellerSchema = Joi.object({
    id: id.required()
})

module.exports = { createSellerSchema, updateSellerSchema, getSellerSchema }