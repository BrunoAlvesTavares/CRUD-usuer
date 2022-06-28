//config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Person = require('./models/Person')

// forma de ler json / middlewares
app.use(
    express.urlencoded({
        extended: true,
    })

)
    app.use(express.json())
    // rotas da API
    const personRoutes = require('./routes/personRoutes')
    app.use('/person', personRoutes)


//rota inicial / endpoint
app.get('/',(req,res) =>{
    //mostrar req

    res.json({message: 'Oi express!'})
})
const DB_USER = "digite o id do banco"
const DB_PASSWORD = encodeURIComponent('digite a senha do banco')

//entregar uma porta 
mongoose
.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.io8vy.mongodb.net/bancodaapi?retryWrites=true&w=majority`)

.then(() =>{
    console.log('conectamos ao mongoDB')
    app.listen(3000)
})
.catch((err) => console.log(err))