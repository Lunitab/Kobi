const faker = require("faker")
const boom = require("@hapi/boom")

class CategoryService {
    constructor() {
        this.categories = []
        this.generate()
    }

    generate() {
        const limit = 50

        for (let index = 0; index < limit; index++) {
            this.categories.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productAdjective()
            })
        }
    }

    async create(data) {
        const newCategory = {
            id: faker.datatype.uuid(),
            ...data,
        }
        this.categories.push(newCategory)
        return newCategory
    }

    async find() {
        return this.categories
    }

    async findOne(id) {
        const user = this.categories.find((item) => item.id === id)
        if (!user) {
            throw boom.notFound("categories not found")
        }

        if (user.isBlocked) {
            throw boom.conflict("categories is block")
        }

        return user
    }

    async update(id, changes) {
        const index = this.categories.findIndex((item) => item.id === id)
        if (index === -1) {
            throw boom.notFound("categories not found")
        }

        const user = this.categories[index]

        this.categories[index] = {
            ...user,
            ...changes,
        }
        return this.categories[index]
    }

    async delete(id) {
        const index = this.categories.findIndex((item) => item.id === id)
        if (index === -1) {
            throw boom.notFound("categories not found")
        }
        this.categories.splice(index, 1)
        return { id }
    }
}

module.exports = CategoryService
