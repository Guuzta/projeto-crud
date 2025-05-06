const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//habilitando o servidor para receber os dados via post do formulário
app.use(express.urlencoded({extended: true}))


//definindo as rotas do servidor
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo teste'
    })
})

//404 not found
app.use((req, res) => {
    res.send('Página não encontrada!')
})

//definindo a porta do servidor
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Servidor executando na porta ${port}...`))