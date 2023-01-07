const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");
const app = express();

app.use(cors())

const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send("<h1>Welcome to Jumia Scraper</h1>")
// });

const website = "https://techcabal.com/";

try {
    axios(website).then((response) => {
      const data = response.data;
      const $ = cheerio.load(data);

      let content = [];

      $(".article-list-title", data).each(function () {
        const title = $(this).text();
        const url = $(this).attr("href");

        content.push({
            title,
            url,
        });

        app.get("/", (req, res) => {
            res.json(content);
        });
        
      })


    });
} catch (error) {
    console.log(error, error.message);
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})



