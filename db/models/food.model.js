const { Model, DataTypes, Sequelize } = require("sequelize")

const { MENU_TABLE } = require("./menu.model")
const { LABEL_TABLE } = require("./label.model")
const { CATEGORY_TABLE } = require("./category.model")

const FOOD_TABLE = "foods"

const FoodSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },

    // Foreign keys
    menuId: {
        field: "menu_id",
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: MENU_TABLE,
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },

    labelId: {
        field: "label_id",
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: LABEL_TABLE,
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },

    categoryId: {
        field: "category_id",
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: CATEGORY_TABLE,
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
}

class Food extends Model {
    static associate(models) {
        this.belongsTo(models.Menu, { as: "menu" })
        this.belongsTo(models.Label, { as: "label" })
        this.belongsTo(models.Category, { as: "category" })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: FOOD_TABLE,
            modelName: "Food",
            timestamps: false,
        }
    }
}

module.exports = { FOOD_TABLE, FoodSchema, Food }
