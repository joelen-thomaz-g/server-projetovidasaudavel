const { Sequelize, Model } = require('sequelize')

class Contato extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                email: Sequelize.STRING,
                mensagem: Sequelize.TEXT,
            }, 
            { 
                sequelize 
            }
        )
        return this
    }
}

module.exports = { Contato }