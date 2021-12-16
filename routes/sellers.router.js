const express = require("express")

const SellerService = require("./../services/seller.service")
const validatorHandler = require("./../middlewares/validator.handler")
const { createSellerSchema, updateSellerSchema, getSellerSchema } = require("./../schemas/seller.schema")

const router = express.Router()
const service = new SellerService()

router.get("/", async (req, res, next) => {
    try {
        const sellers = await service.find()
        res.json(sellers)
    } catch (err) {
        next(err)
    }
})

router.get("/:id", validatorHandler(getSellerSchema, "params"), async (req, res, next) => {
    try {
        const { id } = req.params
        const seller = await service.findOne(id)
        res.status(201).json(seller)
    } catch (err) {
        next(err)
    }
})

router.post("/", validatorHandler(createSellerSchema, "body"), async (req, res, next) => {
    try {
        const body = req.body
        const newSeller = await service.create(body)
        res.json(newSeller)
    } catch (err) {
        next(err)
    }
})

router.patch("/:id", validatorHandler(getSellerSchema, "params"), validatorHandler(updateSellerSchema, "body"), async (req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body
        const updatedSeller = await service.update(id, body)
        res.json(updatedSeller)
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", validatorHandler(getSellerSchema, "params"), async (req, res, next) => {
    try {
        const { id } = req.params
        await service.delete(id)
        res.status(201).json({ id })
    } catch (err) {
        next(err)
    }
})

module.exports = router
