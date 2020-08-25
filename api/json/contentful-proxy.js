const contentful = require('contentful');


const getData = async (req, res) => {

    const apiHost = process.env.SERV_HOST;
    const apiToken = process.env.SERV_TOKEN;

    try {
        const resultData = await fetch(`https://${apiHost}${req.url}&access_token=${apiToken}`);
        const jsonResultData = await resultData.json();

        if(!jsonResultData) {
            res.statusCode = 404;
            return {};
        }

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');

        return jsonResultData;

    } catch (error) {
        res.statusCode = 500;
        return {};
    }

        
}


module.exports = { getData }