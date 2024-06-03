require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const {generateProblem, renderDiagram} = require('./business.js')

const app = express();
const port = 4000;

app.use(cors())

app.use(express.static(__dirname + '/public'))

// Middleware to parse JSON bodies
app.use(bodyParser.json());


// Endpoint to handle questions
app.post('/ask', async (req, res) => {
    console.log('request sent to index...')

    try {
        console.log(req.body.userInput)
        const response = await generateProblem(req.body.promptData)
        
        console.log('Type of response', typeof response)
        res.json(JSON.parse(response))

    } catch (error) {
        console.log(`Error occured ${error}`)
        res.status(500).send('Internal Server Error')
    }
});

app.post('/render', async (req, res) => {
    console.log('request sent to index...')

    try {
        const response = await renderDiagram(req.body.latexCode)
        
        console.log('Type of response', typeof response)
        res.json({response})

    } catch (error) {
        console.log(`Error occured ${error}`)
        res.status(500).send('Internal Server Error')
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});