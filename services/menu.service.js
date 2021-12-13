const faker = require("faker")
const boom = require("@hapi/boom")

class MenuService {
    constructor() {
        this.menus = []
        this.generate()
    }

    generate() {
        const limit = 50

        for (let index = 0; index < limit; index++) {
            this.menus.push({
                id: faker.datatype.uuid(),
                name: faker.company.companyName(),
                image: faker.image.business(),
                status: faker.datatype.boolean(),
            })
        }
    }

    async create(data) {
        const newMenu = {
            id: faker.datatype.uuid(),
            ...data,
        }
        this.menus.push(newMenu)
        return newMenu
    }

    async find() {
        return this.menus
    }

    async findOne(id) {
        const user = this.menus.find((item) => item.id === id)
        if (!user) {
            throw boom.notFound("menus not found")
        }

        if (user.isBlocked) {
            throw boom.conflict("menus is block")
        }

        return user
    }

    async update(id, changes) {
        const index = this.menus.findIndex((item) => item.id === id)
        if (index === -1) {
            throw boom.notFound("menus not found")
        }

        const user = this.menus[index]

        this.menus[index] = {
            ...user,
            ...changes,
        }
        return this.menus[index]
    }

    async delete(id) {
        const index = this.menus.findIndex((item) => item.id === id)
        if (index === -1) {
            throw boom.notFound("menus not found")
        }
        this.menus.splice(index, 1)
        return { id }
    }
}

module.exports = MenuService
