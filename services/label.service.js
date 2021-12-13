const faker = require("faker")
const boom = require("@hapi/boom")

class LabelService {
    constructor() {
        this.labels = []
        this.generate()
    }

    generate() {
        const limit = 50

        for (let index = 0; index < limit; index++) {
            this.labels.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.department(),
            })
        }
    }

    async create(data) {
        const newLabel = {
            id: faker.datatype.uuid(),
            ...data,
        }
        this.labels.push(newLabel)
        return newLabel
    }

    async find() {
        return this.labels
    }

    async findOne(id) {
        const user = this.labels.find((item) => item.id === id)
        if (!user) {
            throw boom.notFound("labels not found")
        }

        if (user.isBlocked) {
            throw boom.conflict("labels is block")
        }

        return user
    }

    async update(id, changes) {
        const index = this.labels.findIndex((item) => item.id === id)
        if (index === -1) {
            throw boom.notFound("labels not found")
        }

        const user = this.labels[index]

        this.labels[index] = {
            ...user,
            ...changes,
        }
        return this.labels[index]
    }

    async delete(id) {
        const index = this.labels.findIndex((item) => item.id === id)
        if (index === -1) {
            throw boom.notFound("labels not found")
        }
        this.labels.splice(index, 1)
        return { id }
    }
}

module.exports = LabelService
