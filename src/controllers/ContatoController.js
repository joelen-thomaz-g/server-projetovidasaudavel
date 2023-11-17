const { Contato } = require("../models/Contato")


class ContatoController {
    async createContato(req, res) {
        try {
            const novoContato = await Contato.create(req.body)
            res.status(201).json(novoContato)
        } catch (error) {
            console.error('Erro ao criar contato: ', error)
            res.status(500).json({error:'Erro interno do servidor'})
        }
    } 
}

module.exports = {ContatoController}