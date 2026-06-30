
const express = require('express')
const app = express()
app.use(express.json())

//ex1 
 app.get ('/', (req , res) => {
    const eune = [
         res.json({aluno: "bruna", diciplina: "backandI", ano: 2026})
    ]

 })

//ex2
app.get ('/p', (req , res) => {
    const p = [
{" id ": 1 ,
" nome ": " Achocolatado Nescau - 550g " ,
" preço ": 12.99},

{" id ": 2 ,
" nome ": " Maionese Hellmann's - 800g " ,
" preço ":  19.90},

{" id ": 3 ,
" nome ": " Suco de Uva Aurora Tinto Integral - 1,5 Litro " ,
" nota ": 14.98},

{" id ": 4 ,
" nome ": "bisnaga" ,
" nota ": 4.49}
];
 res.json(p)
 })




















app.listen(3000, () => {
console.log(" Servidor rodando em http://localhost:3000");
});