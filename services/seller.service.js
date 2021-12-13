const faker = require("faker")
const boom = require("@hapi/boom")

class SellerService {
    constructor() {
        this.sellers = []
        this.generate()
    }

    generate() {
        const limit = 50

        for (let index = 0; index < limit; index++) {
            this.sellers.push({
                id: faker.datatype.uuid(),
                name: faker.name.firstName(),
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
            })
        }
    }

    async create(data) {
        const newSeller = {
            id: faker.datatype.uuid(),
            ...data,
        }
        this.sellers.push(newSeller)
        return newSeller
    }

    async find() {
        return this.sellers
    }

    async findOne(id) {
        const user = this.sellers.find((item) => item.id === id)
        if (!user) {
            throw boom.notFound("sellers not found")
        }

        if (user.isBlocked) {
            throw boom.conflict("sellers is block")
        }

        return user
    }

    async update(id, changes) {
        const index = this.sellers.findIndex((item) => item.id === id)
        if (index === -1) {
            throw boom.notFound("sellers not found")
        }

        const user = this.sellers[index]

        this.sellers[index] = {
            ...user,
            ...changes,
        }
        return this.sellers[index]
    }

    async delete(id) {
        const index = this.sellers.findIndex((item) => item.id === id)
        if (index === -1) {
            throw boom.notFound("sellers not found")
        }
        this.sellers.splice(index, 1)
        return { id }
    }
}

module.exports = SellerService
