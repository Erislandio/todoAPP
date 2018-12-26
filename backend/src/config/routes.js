const express = require('express')

module.exports = function (server) {
    // Rotas
    const router = express.Router()
    server.use('/api', router)

    // Todo rotas

    const todoService = require('../api/todo/todoService')

    // Metodos rest

    todoService.register(router, '/todos')
}