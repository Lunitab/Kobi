"use strict"

const { DataTypes } = require("sequelize")

const { LabelSchema, LABEL_TABLE } = require("./../models/label.model")

module.exports = {
    up: async (queryInterface) => {
        // Add a new column to the table
        await queryInterface.addColumn(LABEL_TABLE, "description", {
            type: DataTypes.STRING,
            allowNull: true,
        })
    },

    down: async (queryInterface) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
}
