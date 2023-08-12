const express = require('express')
const {ScrapperRouter} = require('./routes/_index')
//const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
//const url = 'https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/'


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api/scrapper',ScrapperRouter)




app.listen(3000, () => {
    console.log('http://localhost:3000')
})