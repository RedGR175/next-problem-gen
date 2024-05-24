const OpenAI = require('openai').default;
const fs = require('fs').promises;
const qs = require('qs')
const axios = require('axios')

// Initialize the OpenAI client with your API key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function generateProblem(userInput) {
    try {
        
        console.log(`user input: ${userInput}`)
        const prompt = await fs.readFile('formattedPrompt.txt', 'utf8');

        const messages = ([
            { role: "system", content: prompt },
            { role: "user", content: JSON.stringify(userInput) }
        ]);

        //console.log("Generated JSON string: ", messages);

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: (messages),
            //max_tokens: 100,
            response_format:{type:"json_object"}
        });
        console.log(completion)
        
        const response = (completion.choices[0].message.content);

        console.log(response)

        return (response);
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        throw error;
    }
}

async function renderDiagram(latexCode) {
    const params = qs.stringify({
        'formula': latexCode,
        'fsize': '12px',
        'fcolor': '000000',
        'mode': '0',
        'out': '1',
        'errors': '1',
        'preamble': '\\usepackage{amsmath}\\usepackage{tikz}\\usepackage{pgfplots}',
        'rnd': Math.random()
    });

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    try {
        const response = await axios.post('https://www.quicklatex.com/latex3.f', params, config);
        // Check if the response is successful
        if (response.status !== 200) {
            console.error("Failed to render LaTeX", response.data);
            throw new Error("Failed to render LaTeX");
        }

        // Extract URL from the response data
        const imageUrl = response.data.split("\n")[1].split(' ')[0].trim();
         // Assuming the URL is always on the second line
        console.log("Rendered image URL:", imageUrl);

        return imageUrl; // Return only the URL
    } catch (error) {
        console.error("Error making request:", error);
        throw error;
    }
}





module.exports = { generateProblem, renderDiagram };
