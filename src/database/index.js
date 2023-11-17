const {Sequelize} = require('sequelize')

const databaseConfig = require('../config/database')

const {Contato} = require('../models/Contato')

const models = [Contato]

const connection = new Sequelize(databaseConfig)

models.forEach((model) => model.init(connection))
models.forEach((model) => model.associate && model.associate(connection.models))