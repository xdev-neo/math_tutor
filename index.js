const express = require('express');
const axios = require('axios');
const fs = require('fs')

const app = express()
const port = 3000;

app.use(express.json())
app.use(express.static(__dirname))
// app.use(ejs)/
app.set('views', `${__dirname}/views/`)
app.set('view engine', 'ejs')
// app.set('view engine',ejs)
app.get('/', (req, res) => {
    // console.log(JSON.parse(fetchNav())['menu_config']['items'])
    res.render('main', { nav: JSON.stringify(JSON.parse(fetchNav())['menu_config']['items']) })
})


const fetchNav = () => {

    const nav = fs.readFileSync('./MathTutor_1972023121.json', { encoding: 'utf-8' })
    return nav

}

fetchNav()
app.listen(port, () => {
    console.log(`server is on http://localhost:${port}`)
})








