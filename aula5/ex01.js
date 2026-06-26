
const express = require('express')
const app = express()
app.use(express.json())

app.listen(3000, () => {
console.log(" Servidor rodando em http :// localhost :3000 ");
});

// app.get('/', (req , res) => {
// res.json({ mensagem: " Meu servidor esta no ar!" })
//})

//ex1 
// app.get ('/sobre', (req , res) => {
// res.json({aluno: "bruna", diciplina: "backandI", ano: 2026})
// })