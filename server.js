const express = require("express")

const app = express()

const path = require('path')

app.set("view engine", "ejs")

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))



app.get('/', (req, res) => {
    res.render("index", {otherpage: false})
})

app.get('/privacy-policy', (req, res) => {
    res.render("privacy", {otherpage: true})
})

app.get('/terms-of-service', (req, res) => {
    res.render("terms", {otherpage: true})
})

app.get('/cookie-policy', (req, res) => {
    res.render("cookies", {otherpage: true})
})


app.listen(3000, () => console.log("SERVER IS RUNNING ON PORT 3000"))