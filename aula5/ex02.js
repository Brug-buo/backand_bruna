const express = require('express')
const app = express()
app.use(express.json())

app.get('/alunos', (req, res) => {
    res.json({nome: "Bruna", diciplina: "Desenvolvimento de Sistemas", ano: "2027"})
})
