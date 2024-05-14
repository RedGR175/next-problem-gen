import { useEffect, useState } from 'react';

export default function ProblemGenerator() {
  const [difficulty, setDifficulty] = useState('default');
  const [isStoryProb, setIsStoryProb] = useState('default');
  const [userInput, setUserInput] = useState('');
  const [output, setOutput] = useState('Output...');

  const handleDifficultyClick = (id) => {
    setDifficulty(id);
  };

  const handleStoryProbClick = (id) => {
    setIsStoryProb(id);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const getValues = () => {
    let promptData = userInput;
    promptData += ` || Difficulty: ${difficulty} || Story Problem: ${isStoryProb}`;
    return promptData;
  };

  const submit = async () => {
    setOutput('Generating...');
    const promptData = getValues();

    const response = await fetch('http://localhost:4000/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ promptData }),
    });

    if (!response.ok) {
      setOutput(`Request failed with status: ${response.status}`);
      return;
    }

    const data = await response.json();
    setOutput(data.answer);
  };


  return (
    <div id="problem-generator">
      <div id="input-container">
        <div className="option-box">
          <div className="input-box">
            <div className="description">
              <p>Prompt Input</p>
            </div>
            <div id="text-input-container">
              <textarea
                placeholder="Ex. Adding fractions"
                name="user-input"
                id="user-input"
                maxLength="100"
                value={userInput}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>

          <div className="separator"></div>

          <div className="description">
            <p>Difficulty</p>
          </div>
          <div className="selector-container difficulty">
            {['Easy', 'Medium', 'Hard'].map((level) => (
              <button
                key={level}
                className={`selector-button ${difficulty === level ? 'selected' : ''}`}
                onClick={() => handleDifficultyClick(level)}
              >
                {level}
              </button>
            ))}
          </div>

          <div className="separator"></div>

          <div className="description">
            <p>Story Problem?</p>
          </div>
          <div className="selector-container story-problem">
            {['Yes', 'No'].map((option) => (
              <button
                key={option}
                className={`selector-button ${isStoryProb === option ? 'selected' : ''}`}
                onClick={() => handleStoryProbClick(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="separator"></div>

          <button onClick={submit} id="submit-button">
            Generate
          </button>
        </div>
      </div>
      <div id="output-container">
        <p id="output">{output}</p>
      </div>
    </div>
  );
}
