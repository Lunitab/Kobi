const {Model, DataTypes, Sequelize} = require('sequelize');

const SELLER_TABLE = 'sellers'

const SellerSchema = {
    id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
}

class Seller extends Model {
    static associate(models){
        this.hasOne(models.Menu, {
            as: 'menu',
            foreignKey: 'sellerId'
        });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: SELLER_TABLE,
            modelName: 'Seller',
            timestamps: false
        }
    }
}

module.exports = {SELLER_TABLE, SellerSchema, Seller};