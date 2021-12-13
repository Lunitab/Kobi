const express = require('express');

const FoodService = require('./../services/food.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createFoodSchema, updateFoodSchema, getFoodSchema } = require('./../schemas/food.schema');

const router = express.Router();
const service = new FoodService();

router.get('/', async (req, res) => {
    try {
        const foods = await service.find()
        res.json(foods);
    } catch (err) {
        next(err);
    }
})

router.get('/:id', validatorHandler(getFoodSchema, "params") ,async (req, res) => {
    try {
    const {id} = req.params;
    const food = await service.findOne(id);
    res.json(food);
    } catch (err) {
        next(err);
    }
})



module.exports = router;