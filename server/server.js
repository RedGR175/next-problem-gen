require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const {generateProblem, renderDiagram} = require('./business.js')
const { addProblem, getProblems } = require('./dao');

const app = express();
const port = process.env.PORT || 4000;
app.use(cors())

app.use(express.static(__dirname + '/public'))

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/test', async (req, res) => {
    res.json("hello world")
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

// Calls the renderDiagram function in business.js
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

app.post('/getSavedResults', async (req, res) => {
    console.log('request sent to index...')

    try {
        const response = await getProblems()
        
        
        res.json({response})

    } catch (error) {
        console.log(`Error occured ${error}`)
        res.status(500).send('Internal Server Error')
    }
});

app.post('/addResult', async (req, res) => {
    console.log('request sent to index...')

    try {
        resultData = req.body
        const response = await addProblem(resultData.problem, resultData.solution, resultData.diagram)
        
        res.json({response})

    } catch (error) {
        console.log(`Error occured ${error}`)
        res.status(500).send('Internal Server Error')
    }
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    //addProblem('Find the surface area of a sphere with a radius of 5 cm.', '314 cm²', '\\begin{tikzpicture}\n\\draw (0,0) circle (1.5cm);\n\\draw[dashed] (0,0) circle (1.5cm and 0.75cm);\n\\node at (0.8, 1.8) {5 cm};\n\\end{tikzpicture}')
}); 