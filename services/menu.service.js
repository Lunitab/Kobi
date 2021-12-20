const boom = require("@hapi/boom")

const { models } = require("./../libs/sequelize")

class MenuService {
    async create(data) {
        const newSeller = await models.Seller.create(data.seller)
        const newMenu = await models.Menu.create({
            ...data,
            sellerId: newSeller.id,
        })
        const newCategory = await models.Category.create({
            ...data.category,
            menuId: newMenu.id,
        })

        return newMenu
    }

    async find() {
        const menus = await models.Menu.findAll({
            include: ["seller", "label"],
        })
        return menus
    }

    async findOne(id) {
        const menu = await models.Menu.findByPk(id, {
            include: [
                "seller",
                "label",
                {
                    association: "categories",
                    include: ["foods"],
                },
            ],
        })
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
