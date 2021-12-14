const { Model, DataTypes, Sequelize } = require("sequelize")

const { SELLER_TABLE } = require("./seller.model")
const { LABEL_TABLE } = require("./label.model")

const MENU_TABLE = "menus"

const MenuSchema = {
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
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "created_at",
        defaultValue: Sequelize.NOW,
    },

    // Foreign keys
    sellerId: {
        field: "seller_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: SELLER_TABLE,
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },

    labelId: {
        field: "label_id",
        allowNull: false,
        type: DataTypes.INTEGER,

        references: {
            model: LABEL_TABLE,
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
}

class Menu extends Model {
    static associate(models) {
        this.belongsTo(models.Seller, { as: "seller" })
        this.belongsTo(models.Label, { as: "label" })

        this.hasMany(models.Food, {
            as: "foods",
            foreignKey: "menuId",
        })

        this.hasMany(models.Category, {
            as: "categories",
            foreignKey: "menuId",
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: MENU_TABLE,
            modelName: "Menu",
            timestamps: false,
        }
    }
}

module.exports = { MENU_TABLE, MenuSchema, Menu }
