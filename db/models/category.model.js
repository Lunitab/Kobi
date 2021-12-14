const { Model, DataTypes, Sequelize } = require("sequelize")

const { MENU_TABLE } = require("./menu.model")

const CATEGORY_TABLE = "categories"

const CategorySchema = {
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
    createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },

    // Foreign key
    menuId: {
        field: "menu_id",
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: MENU_TABLE,
            key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
    },
}

class Category extends Model {
    static associate(models) {

        this.belongsTo(models.Menu, {as: "menu"})

        this.hasMany(models.Food, {
            as: "foods",
            foreignKey: "categoryId",
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: "Category",
            timestamps: false,
        }
    }
}

module.exports = { CATEGORY_TABLE, CategorySchema, Category }
