// ResultItem.js
import React from 'react';
import { RenderLatex } from './RenderLatex';
import { GetDiagram } from './GetDiagram';

const ResultItem = ({ item }) => {
    return (
        <div className="result-item">
            
            <div>
                <h5>Problem:</h5>
                    <RenderLatex // Uses the RenderLatex component to render
                        latex={item.problem}
                    />
            </div>

            <div id='solution-container'>
                <h5>Solution:</h5>
                <RenderLatex
                    latex={item.solution}
                />
            </div>
            
            <div id='diagram-container'>
                <GetDiagram // Gets diagram from a server function
                    TikzCode={item.diagram}
                />
            </div>
        </div>
        

        
    );
};

export default ResultItem;
