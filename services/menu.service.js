const boom = require("@hapi/boom")

const { models } = require("./../libs/sequelize")

class MenuService {

    async create(data) {
        const newMenu = await models.Menu.create(data)
        return newMenu
    }

    async find() {
        const menus = await models.Menu.findAll()
        return menus
    }

    async findOne(id) {
        const menu = await models.Menu.findByPk(id)
        return menu
    }

    async update(id, changes) {
        const menu = await this.findOne(id)
        const rta = await menu.update(changes)
        return rta
    }

    async delete(id) {
        const menu = await this.findOne(id)
        await menu.destroy()
        return { id }
    }
}

module.exports = MenuService
