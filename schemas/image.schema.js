const Joi = require('joi');

const imageType = Joi.string().valid('image/jpeg', 'image/png', 'image/gif', 'image/jpg');

const createUploadSchema = Joi.object({
    image: imageType.required(),
});

const updateUploadSchema = Joi.object({
    image: imageType.required(),
});

module.exports = {createUploadSchema, updateUploadSchema};