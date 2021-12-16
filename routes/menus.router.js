const express = require('express');

const MenuService = require('./../services/menu.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createMenuSchema, updateMenuSchema, getMenuSchema } = require('./../schemas/menu.schema');

const router = express.Router();
const service = new MenuService();

router.get('/', async (req, res, next) => {
    try {
        const menus = await service.find()
        res.json(menus);
    } catch (err) {
        next(err);
    }
})

router.get('/:id', validatorHandler(getMenuSchema, "params") ,async (req, res, next) => {
    try {
    const {id} = req.params;
    const menu = await service.findOne(id);
    res.json(menu);
    } catch (err) {
        next(err);
    }
})

router.post('/', validatorHandler(createMenuSchema, "body"), async (req, res, next) => {
    try {
        const newMenu = await service.create(req.body);
        res.status(201).json(newMenu);
    } catch (err) {
        next(err);
    }
})

router.patch('/:id', validatorHandler(getMenuSchema, "params"), validatorHandler(updateMenuSchema, "body"), async (req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const menu = await service.update(id, body);
        res.json(menu);
    } catch (err) {
        next(err);
    }
})

router.delete('/:id', validatorHandler(getMenuSchema, "params"), async (req, res, next) => {
    try {
        const {id} = req.params;
        await service.delete(id);
        res.status(201).json({ id })
    } catch (err) {
        next(err);
    }
})

module.exports = router;