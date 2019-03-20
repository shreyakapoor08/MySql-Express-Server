const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("view engine", "hbs")

app.get('/', (req, res) => {
    res.render('persons', {
        persons: [
            {name: 'Abc', age: 22, city: 'Bhobal'},
            {name: 'Cde', age: 15, city: 'MP'}
        ]
    })
})

app.get('/add', (req, res) => {
    res.render('persons_add')
})

app.post('/add', (req, res) => {

})

app.listen(4444, () => {
    console.log("Server started on http://localhost:4444/")
})