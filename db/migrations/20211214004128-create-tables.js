'use strict';

const { SellerSchema, SELLER_TABLE } = require('./../models/seller.model');
const { LabelSchema, LABEL_TABLE } = require('./../models/label.model');
const { MenuSchema, MENU_TABLE } = require('./../models/menu.model');
const { CategorySchema, CATEGORY_TABLE } = require('./../models/category.model');
const { FoodSchema, FOOD_TABLE } = require('./../models/food.model');


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(SELLER_TABLE, SellerSchema);
    await queryInterface.createTable(LABEL_TABLE, LabelSchema);
    await queryInterface.createTable(MENU_TABLE, MenuSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(FOOD_TABLE, FoodSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(SELLER_TABLE);
    await queryInterface.dropTable(LABEL_TABLE);
    await queryInterface.dropTable(MENU_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(FOOD_TABLE);
  }
};
