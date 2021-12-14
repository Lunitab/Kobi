const boom = require("@hapi/boom")

const { models } = require("./../libs/sequelize")

class SellerService {

    async create(data) {
        const newSeller = await models.Seller.create(data)
        return newSeller
    }

    async find() {
        const sellers = await models.Seller.findAll({
            include: ["menu"]
        })
        return sellers
    }

    async findOne(id) {
        const seller = await models.Seller.findByPk(id)
        return seller
    }

    async update(id, changes) {
        const seller = await this.findOne(id)
        const rta = await seller.update(changes)
        return rta
    }

    async delete(id) {
        const seller = await this.findOne(id)
        await seller.destroy()
        return { id }
    }
}

module.exports = SellerService
