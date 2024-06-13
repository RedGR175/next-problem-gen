const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { generateProblem, renderDiagram } = require('./business.js');
const { addProblem, getProblems, removeProblem } = require('./dao');

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

app.use(express.static(__dirname + '/public'));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/test', async (req, res) => {
    res.json("hello world");
});

app.post('/ask', async (req, res) => {
    console.log('Request received at /ask');
    try {
        const response = await generateProblem(req.body.promptData);
        res.json(JSON.parse(response));
    } catch (error) {
        console.error(`Error occurred at /ask: ${error}`);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/render', async (req, res) => {
    console.log('Request received at /render');
    try {
        const response = await renderDiagram(req.body.latexCode);
        res.json({ response });
    } catch (error) {
        console.error(`Error occurred at /render: ${error}`);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/getSavedResults', async (req, res) => {
    console.log('Request received at /getSavedResults');
    try {
        const response = await getProblems();
        res.json({ response });
    } catch (error) {
        console.error(`Error occurred at /getSavedResults: ${error}`);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/addResult', async (req, res) => {
    console.log('Request received at /addResult');
    try {
        const resultData = req.body;
        const response = await addProblem(resultData.problem, resultData.solution, resultData.diagram);
        res.json({ response });
    } catch (error) {
        console.error(`Error occurred at /addResult: ${error}`);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/removeResult', async (req, res) => {
    console.log('Request received at /removeResult');
    try {
        const { id } = req.body;
        const removedProblem = await removeProblem(id);
        res.json({ success: true, removed: removedProblem });
    } catch (error) {
        console.error(`Error occurred at /removeResult: ${error}`);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
