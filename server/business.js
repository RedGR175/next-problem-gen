const OpenAI = require('openai').default;
const fs = require('fs').promises;

// Initialize the OpenAI client with your API key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function sendToOpenAi(userInput,promptFile) {
    try {
        
        console.log(`user input: ${userInput}`)
        const prompt = await fs.readFile(promptFile, 'utf8');

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
        
        const response = completion.choices[0].message.content;
        console.log(response)
        return (response);
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        throw error;
    }
}

async function generateProblem(userInput){
    return sendToOpenAi(userInput,'formattedPrompt.txt')
}

module.exports = { generateProblem };
