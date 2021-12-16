const express = require("express")

const UploadService = require("./../services/upload.service")
const validatorHandler = require("./../middlewares/validator.handler")
const { createUploadSchema, updateUploadSchema } = require("./../schemas/image.schema")

const router = express.Router()
const service = new UploadService()


router.post("/menu", validatorHandler(createUploadSchema) ,service.uploadMenu, async (req, res, next) => {
    try {
        res.json({ data: 'Image uploaded successfully' })
    } catch (err) {
        next(err)
    }
})

router.post("/food", validatorHandler(createUploadSchema) ,service.uploadFood, async (req, res, next) => {
    try {
        res.json({ data: 'Image uploaded successfully' })
    } catch (err) {
        next(err)
    }
})

module.exports = router
