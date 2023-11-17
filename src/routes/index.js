const {Router} = require('express')
const { ContatoController } = require('../controllers/ContatoController')

const contatoController = new ContatoController

const routes = Router()

routes.post("/api/contatos", contatoController.createContato)

module.exports = {routes}