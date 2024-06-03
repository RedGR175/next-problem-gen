import React, { useState, useEffect } from 'react';
import { getDiagram } from '../pages/api/api';

export const GetDiagram = ({ TikzCode }) => {
    const [renderedUrl, setRenderedUrl] = useState('');

    useEffect(() => {
        const fetchDiagram = async () => {
            if (TikzCode) {
                const url = await getDiagram(TikzCode);
                setRenderedUrl(url);
            }
        };

        fetchDiagram();
    }, [TikzCode]);

    return renderedUrl ? <img src={renderedUrl} alt="Rendered Diagram" /> : null;
};
