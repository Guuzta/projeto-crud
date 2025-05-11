const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//conectando ao banco de dados
db.connect()

//definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//habilitando o servidor para receber os dados via post do formulário
app.use(express.urlencoded({extended: true}))

//definindo as rotas
app.use('/', routes)

//404 not found
app.use((req, res) => {
    res.send('Página não encontrada!')
})

//definindo a porta do servidor
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Servidor executando na porta ${port}...`))