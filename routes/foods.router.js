const express = require("express")

const FoodService = require("./../services/food.service")
const validatorHandler = require("./../middlewares/validator.handler")
const { createFoodSchema, updateFoodSchema, getFoodSchema } = require("./../schemas/food.schema")

const router = express.Router()
const service = new FoodService()

router.get("/", async (req, res, next) => {
    try {
        const foods = await service.find()
        res.json(foods)
    } catch (err) {
        next(err)
    }
})

router.get("/:id", validatorHandler(getFoodSchema, "params"), async (req, res, next) => {
    try {
        const { id } = req.params
        const food = await service.findOne(id)
        res.json(food)
    } catch (err) {
        next(err)
    }
})

router.post("/", validatorHandler(createFoodSchema, "body"), async (req, res, next) => {
    try {
        const newFood = await service.create(req.body)
        res.status(201).json(newFood)
    } catch (err) {
        next(err)
    }
})

router.patch("/:id", validatorHandler(getFoodSchema, "params"), validatorHandler(updateFoodSchema, "body"), async (req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body
        const food = await service.update(id, body)
        res.json(food)
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", validatorHandler(getFoodSchema, "params"), async (req, res, next) => {
    try {
        const { id } = req.params
        const food = await service.delete(id)
        res.json(food)
    } catch (err) {
        next(err)
    }
})

module.exports = router
