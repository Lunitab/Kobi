const faker = require("faker")
const boom = require("@hapi/boom")

class FoodService {
    constructor() {
        this.foods = []
        this.generate()
    }

    generate() {
        const limit = 50

        for (let index = 0; index < limit; index++) {
            this.foods.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                description: faker.lorem.paragraph(),
                image: faker.image.food(),
                status: faker.datatype.boolean(),
            })
        }
    }

    async create(data) {
        const newFood = {
            id: faker.datatype.uuid(),
            ...data,
        }
        this.foods.push(newFood)
        return newFood
    }

    async find() {
        return this.foods
    }

    async findOne(id) {
        const user = this.foods.find((item) => item.id === id)
        if (!user) {
            throw boom.notFound("foods not found")
        }

        if (user.isBlocked) {
            throw boom.conflict("foods is block")
        }

        return user
    }

    async update(id, changes) {
        const index = this.foods.findIndex((item) => item.id === id)
        if (index === -1) {
            throw boom.notFound("foods not found")
        }

        const user = this.foods[index]

        this.foods[index] = {
            ...user,
            ...changes,
        }
        return this.foods[index]
    }

    async delete(id) {
        const index = this.foods.findIndex((item) => item.id === id)
        if (index === -1) {
            throw boom.notFound("foods not found")
        }
        this.foods.splice(index, 1)
        return { id }
    }
}

module.exports = FoodService
