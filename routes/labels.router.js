const express = require("express")

const LabelService = require("./../services/label.service")
const validatorHandler = require("./../middlewares/validator.handler")
const { createLabelSchema, updateLabelSchema, getLabelSchema } = require("./../schemas/label.schema")

const router = express.Router()
const service = new LabelService()

router.get("/", async (req, res, next) => {
    try {
        const labels = await service.find()
        res.json(labels)
    } catch (err) {
        next(err)
    }
})

router.get("/:id", validatorHandler(getLabelSchema, "params"), async (req, res, next) => {
    try {
        const { id } = req.params
        const label = await service.findOne(id)
        res.json(label)
    } catch (err) {
        next(err)
    }
})

router.post("/", validatorHandler(createLabelSchema, "body"), async (req, res, next) => {
    try {
        const body = req.body
        const newLabel = await service.create(body)
        res.status(201).json(newLabel)
    } catch (err) {
        next(err)
    }
})

router.patch("/:id", validatorHandler(getLabelSchema, "params"), validatorHandler(updateLabelSchema, "body"), async (req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body
        const updatedLabel = await service.update(id, body)
        res.json(updatedLabel)
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", validatorHandler(getLabelSchema, "params"), async (req, res, next) => {
    try {
        const { id } = req.params
        await service.delete(id)
        res.status(201).json({id})
    } catch (err) {
        next(err)
    }
})

module.exports = router
