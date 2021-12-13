const express = require('express');

const LabelService = require('./../services/label.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createLabelSchema, updateLabelSchema, getLabelSchema } = require('./../schemas/label.schema');

const router = express.Router();
const service = new LabelService();

router.get('/', async (req, res) => {
    try {
        const labels = await service.find()
        res.json(labels);
    } catch (err) {
        next(err);
    }
})

router.get('/:id', validatorHandler(getLabelSchema, "params") ,async (req, res) => {
    try {
    const {id} = req.params;
    const label = await service.findOne(id);
    res.json(label);
    } catch (err) {
        next(err);
    }
})



module.exports = router;