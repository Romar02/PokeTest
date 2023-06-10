'use strict';

const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('./index.js');
const connection = db.sequelize;

const User = connection.define(
    'user',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: 'User',
        name: 'user',
        modelNamel: 'User',
    }
);

(async () => {
    await User.sync({});
    console.log('Les table ont été créées !');
})();

export default User;
