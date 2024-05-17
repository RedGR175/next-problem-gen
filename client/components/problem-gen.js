import { useEffect, useState } from 'react';
import { submitPrompt } from '../pages/api/api'; // Adjust the path as needed
import SelectorButtons from '../components/SelectorButtons'; // Adjust the path as needed

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

    try {
      const answer = await submitPrompt(promptData);
      setOutput(answer);
    } catch (error) {
      setOutput(error.message);
    }
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
          <SelectorButtons
            type="difficulty"
            options={['Easy', 'Medium', 'Hard']}
            selectedOption={difficulty}
            handleClick={handleDifficultyClick}
          />

          <div className="separator"></div>

          <div className="description">
            <p>Story Problem?</p>
          </div>
          <SelectorButtons
            type="story-problem"
            options={['Yes', 'No']}
            selectedOption={isStoryProb}
            handleClick={handleStoryProbClick}
          />

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
