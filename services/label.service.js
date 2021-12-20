const boom = require("@hapi/boom")

const { models } = require("./../libs/sequelize")

class LabelService {

    async create(data) {
        const newLabel = await models.Label.create(data)
        return newLabel
    }

    async find() {
        const labels = await models.Label.findAll({include:['menus', 'foods']})
        return labels
    }

    async findOne(id) {
        const label = await models.Label.findByPk(id)
        return label
    }

    async update(id, changes) {
        const label = await this.findOne(id)
        const rta = await label.update(changes)
        return rta
    }

    async delete(id) {
        const label = await this.findOne(id)
        await label.destroy()
        return { id }
    }
}

module.exports = LabelService
