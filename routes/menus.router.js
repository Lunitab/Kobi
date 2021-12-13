const express = require('express');

const MenuService = require('./../services/menu.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createMenuSchema, updateMenuSchema, getMenuSchema } = require('./../schemas/menu.schema');

const router = express.Router();
const service = new MenuService();

router.get('/', async (req, res) => {
    try {
        const menus = await service.find()
        res.json(menus);
    } catch (err) {
        next(err);
    }
})

router.get('/:id', validatorHandler(getMenuSchema, "params") ,async (req, res) => {
    try {
    const {id} = req.params;
    const menu = await service.findOne(id);
    res.json(menu);
    } catch (err) {
        next(err);
    }
})



module.exports = router;