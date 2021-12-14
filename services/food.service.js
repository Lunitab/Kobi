const boom = require("@hapi/boom")

const { models } = require("./../libs/sequelize")

class FoodService {

    async create(data) {
        const newFood = await models.Food.create(data)
        return newFood
    }

    async find() {
        const foods = await models.Food.findAll()
        return foods
    }

    async findOne(id) {
        const food = await models.Food.findByPk(id)
        return food
    }

    async update(id, changes) {
        const food = await this.findOne(id)
        const rta = await food.update(changes)
        return rta
    }

    async delete(id) {
        const food = await this.findOne(id)
        await food.destroy()
        return { id }
    }
}

module.exports = FoodService
