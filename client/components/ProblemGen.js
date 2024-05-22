import React, { useState } from 'react';
import SelectorButtons from '../components/SelectorButtons';
import { submitPrompt } from '../pages/api/api';
import { RenderLatex } from './RenderLatex';

export default function ProblemGenerator() {
  const [needsDiagram, setNeedsDiagram] = useState('No');
  const [difficulty, setDifficulty] = useState('default');
  const [isStoryProb, setIsStoryProb] = useState('default');
  const [userInput, setUserInput] = useState({});
  const [output, setOutput] = useState({ problem: 'Output...', solution: '' });

  const handleDifficultyClick = (id) => {
    setDifficulty(id);
  };

  const handleStoryProbClick = (id) => {
    setIsStoryProb(id);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const getValues = () => {
    return {
      prompt: JSON.stringify(userInput),
      difficulty: difficulty,
      story_problem: isStoryProb,
      needsDiagram: needsDiagram
    };
  };

  const submit = async () => {
    setOutput({ problem: 'Generating...', solution: '' });
    const promptData = getValues();

    try {
      const { problem, solution, diagram } = await submitPrompt(promptData);
      setOutput({ problem, solution, diagram });
      console.log(problem, solution, diagram)
    } catch (error) {
      console.error('API Error:', error);
      setOutput({ problem: error.message, solution: '' });
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
                name="prompt"
                id="user-input"
                maxLength="100"
                value={userInput.prompt || ''}
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

          <div className="description">
          <p>Diagram Needed?</p>
          </div>
          <SelectorButtons
            type="diagram"
            options={['Yes', 'No']}
            selectedOption={needsDiagram}
            handleClick={setNeedsDiagram}
          />


          <button onClick={submit} id="submit-button">
            Generate
          </button>
        </div>
      </div>
      <div id="output-container">
        <div>
          <p>Problem:</p>
          <RenderLatex
            latex={output.problem}
          />
        </div>
        <div id='solution-container'>
          <p>Solution:</p>
          <RenderLatex
            latex={output.solution}
          />
        </div>
        <div id='solution-container'>
          <p>Diagram</p>
          <p>{output.diagram}</p>
          
        </div>

      </div>
      
    </div>
  );
}
