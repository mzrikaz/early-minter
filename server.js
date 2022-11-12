const express = require("express")

const app = express()

const path = require('path')

app.set("view engine", "ejs")

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render("index", {otherpage: false, title: 'Early Minter'})
})

app.get('/nft', (req, res) => {
    res.render("nft", {otherpage: true, title: 'NFT'})
})

app.get('/token', (req, res) => {
    res.render("token", {otherpage: true, title: 'NFT'})
})

app.get('/waiting-list', (req, res) => {
    res.render("wait_list", {otherpage: true, title: 'Waiting List'})
})

app.get('/privacy-policy', (req, res) => {
    res.render("privacy", {otherpage: true, title: 'Privacy Policy'})
})

app.get('/terms-of-service', (req, res) => {
    res.render("terms", {otherpage: true, title: 'Terms of Service'})
})

app.get('/cookie-policy', (req, res) => {
    res.render("cookies", {otherpage: true, title: 'Cookie Policy'})
})

const PORT = process.env.PORT || 5000


app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`))