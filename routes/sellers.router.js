const express = require('express');

const SellerService = require('./../services/seller.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createSellerSchema, updateSellerSchema, getSellerSchema } = require('./../schemas/seller.schema');

const router = express.Router();
const service = new SellerService();

router.get('/', async (req, res) => {
    try {
        const sellers = await service.find()
        res.json(sellers);
    } catch (err) {
        next(err);
    }
})

router.get('/:id', validatorHandler(getSellerSchema, "params") ,async (req, res) => {
    try {
    const {id} = req.params;
    const seller = await service.findOne(id);
    res.json(seller);
    } catch (err) {
        next(err);
    }
})



module.exports = router;