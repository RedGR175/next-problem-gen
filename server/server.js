require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
  // Use the promise-based version of 'fs'
const {generateProblem} = require('./business.js')

const app = express();
const port = 4000;

app.use(cors())

app.use(express.static(__dirname + '/public'))

// Initialize the OpenAI client with your API key


// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve HTML file
app.get('/', (req, res) => {
    res.json({ message: "hello world"})
});

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

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});