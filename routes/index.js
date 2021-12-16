const express = require("express")

const foodsRouter = require("./foods.router")
const labelsRouter = require("./labels.router")
const menusRouter = require("./menus.router")
const sellersRouter = require("./sellers.router")
const categoriesRouter = require("./categories.router")
const uploadRouter = require("./upload.router")

function routerApi(app) {
    const router = express.Router()
    app.use("/api/v1", router)
    router.use("/foods", foodsRouter)
    router.use("/labels", labelsRouter)
    router.use("/menus", menusRouter)
    router.use("/sellers", sellersRouter)
    router.use("/categories", categoriesRouter)
    router.use("/upload", uploadRouter)
}

module.exports = routerApi;
