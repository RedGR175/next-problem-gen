import React, { useState, useEffect } from 'react';
import { getDiagram } from '../pages/api/api';

export const GetDiagram = ({ TikzCode }) => {   //communicates with the api.js file to get a rendered url
    const [renderedUrl, setRenderedUrl] = useState('');

    useEffect(() => {
        const fetchDiagram = async () => {
            if (TikzCode) { //only calls the api.js if there is Tikz code
                const url = await getDiagram(TikzCode);
                setRenderedUrl(url);
            }
        };

        fetchDiagram();
    }, [TikzCode]);

    return renderedUrl ? <img src={renderedUrl} alt="Rendered Diagram" /> : null;  //return the img if url not null
};
