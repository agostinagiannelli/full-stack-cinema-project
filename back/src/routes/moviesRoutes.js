const { Router } = require('express')
const moviesController = require('../controllers/moviesController')

const moviesRoutes = Router()

moviesRoutes.get('/', moviesController)

module.exports = { moviesRoutes }