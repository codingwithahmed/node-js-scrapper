const rp = require('request-promise')
const cheerio = require('cheerio')

//const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
//const url = 'https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/'

async function GETPAGE(url) {
    try {
        const html = await rp(url); // Use await to fetch the HTML content
        const $ = cheerio.load(html);

        const h1Text = $('h1').text(); // Select the h1 tag and get its text
        const pText = $('p').text(); // Select the h1 tag and get its text

        console.log("H1 :", h1Text);
        console.log("P :", pText);

    } catch (error) {
        console.log("Error\t", error);
    }
}

GETPAGE(url);
