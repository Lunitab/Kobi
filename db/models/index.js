
const {Seller, SellerSchema} = require('./seller.model')
const {Menu, MenuSchema} = require('./menu.model')
const {Label, LabelSchema} = require('./label.model')
const {Food, FoodSchema} = require('./food.model')
const {Category, CategorySchema} = require('./category.model')

function setupModels(sequelize){
    Seller.init(SellerSchema, Seller.config(sequelize) )
    Menu.init(MenuSchema, Menu.config(sequelize) )
    Label.init(LabelSchema, Label.config(sequelize))
    Food.init(FoodSchema, Food.config(sequelize))
    Category.init(CategorySchema, Category.config(sequelize))

    // Asociaciones
}

module.exports = setupModels;