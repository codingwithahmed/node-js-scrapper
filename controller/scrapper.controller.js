const { Parser } = require('../utils/_index')

module.exports = async (req, res) => {
    try {
        const { url } = req.body
        //   console.log("URL\t", req.body)
        const data = await Parser(url)
        res.status(200).json(data)
    } catch (error) {

        res.status(500).json(error)
    }
}