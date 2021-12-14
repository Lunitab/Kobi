const express = require("express")
const routerApi = require("./routes")

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require("./middlewares/error.handler")

const app = express()
const port = process.env.PORT || 8080
app.use(express.json())

const frontend = express.static("frontend")

routerApi(app)

// Configurar Middlewares
app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.use(frontend)

app.listen(port, () => {
    console.log("Mi port" + port)
})
