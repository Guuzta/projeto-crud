const router = require('express').Router()
const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')


//pagina inicial - rotas do servidor
router.get('/', IndexController.index)

//formulario
router.get('/formulario', CustomersController.index)
router.post('/formulario/add', CustomersController.add)

//listar 
router.get('/list', CustomersController.listUsers)

//editar
router.get('/edit', CustomersController.indexEdit)
router.post('/edit/:id', CustomersController.edit)

//remover
router.get('/remove/:id', CustomersController.remove)

module.exports = router