const PORT = 8000;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const cors = require('cors');
app.use(cors());

const url = 'https://www.lastampa.it';

app.get('/', function(req,res){
   res.json("hello backend")
})
app.get('/newsfeed', (req,res) =>{
     axios(url).then((response) => {
    const HtmlData = response.data;
    const $ = cheerio.load(HtmlData);
    const articles = [];
    $('.entry__title').each(function() {
        const title = $(this).text().trim();
        articles.push({
            title
        })
        
        })
        res.json(articles)
}).catch(err => console.log(err))


})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});