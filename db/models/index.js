
const {Menu, MenuSchema} = require('./menu.model')
const {Label, LabelSchema} = require('./label.model')
const {Food, FoodSchema} = require('./food.model')
const {Seller, SellerSchema} = require('./seller.model')
const {Category, CategorySchema} = require('./category.model')

function setupModels(sequelize){
    Seller.init(SellerSchema, Seller.config(sequelize) )
    Menu.init(MenuSchema, Menu.config(sequelize) )
    Label.init(LabelSchema, Label.config(sequelize))
    Food.init(FoodSchema, Food.config(sequelize))
    Category.init(CategorySchema, Category.config(sequelize))

    // Asociaciones
    Seller.associate(sequelize.models)
    Menu.associate(sequelize.models)
    Label.associate(sequelize.models)
    Food.associate(sequelize.models)
    Category.associate(sequelize.models)
}

module.exports = setupModels;