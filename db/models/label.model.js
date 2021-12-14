const { Model, DataTypes, Sequelize } = require("sequelize")

const LABEL_TABLE = "labels"

const LabelSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
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
}

class Label extends Model {
    static associate(models) {
        this.hasMany(models.Menu, {
            as: "menus",
            foreignKey: "label_id",
        })
        this.hasMany(models.Food, {
            as: "foods",
            foreignKey: "label_id",
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: LABEL_TABLE,
            modelName: "Label",
            timestamps: false,
        }
    }
}

module.exports = { LABEL_TABLE, LabelSchema, Label }
