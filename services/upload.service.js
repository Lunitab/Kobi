const multer = require("multer")

const storageMenu = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "frontend/assets/img/img_menus")
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`)
    },
})

const storageFood = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "frontend/assets/img/img_foods")
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`)
    },
})

const upload2menu = multer({ storage: storageMenu })

const upload2food = multer({ storage: storageFood })

class UploadService {
    uploadMenu = upload2menu.single("menuImage")
    uploadFood = upload2food.single("foodImage")
    
}

module.exports = UploadService
