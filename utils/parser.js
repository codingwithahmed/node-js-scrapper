const rp = require('request-promise')
const cheerio = require('cheerio')

module.exports = async function Parser(url) {
    try {
        const html = await rp(url);
        const $ = cheerio.load(html);

        const h1Text = $('h1').text();
        const pText = $('p').text();
        const imageSources = [];

        $('img').each((index, element) => {
            const src = $(element).attr('src');
            if (src) {
                imageSources.push(src);

            }
        });

        return {
            data: {
                "Heading":h1Text,
                //                pText,
                imageSources
            },
            message: "Parsed Succesfully"
        }

    } catch (error) {
        console.log("Error\t", error);

        return {
            data: {
                error
            },
            message: "Parsed Un-Succesfully"
        }
    }
}