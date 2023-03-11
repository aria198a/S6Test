const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('index')
  })
  
  app.get('/about', (req, res) => {
    res.render('index', { showPage: 'about' })
  })
  
  app.get('/portfolio', (req, res) => {
    res.render('index', { showPage: 'portfolio' })
  })
  
  app.get('/contact', (req, res) => {
    res.render('index', { showPage: 'contact' })
  })

app.listen(port, () => {
    console.log(`Express is listening on localhost: ${port}`)
})

