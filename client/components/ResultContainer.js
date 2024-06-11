// ResultContainer.js
import React, { useState, useEffect } from 'react';
import { getSavedResults } from '../pages/api/api';
import ResultItem from './ResultItem';

const GetSavedResults = () => {
    const [json, setJson] = useState('');

    useEffect(() => {
        const fetchSavedResults = async () => {
            const response = await getSavedResults();
            setJson(JSON.stringify(response, null, 2));
        };

        fetchSavedResults();
    }, []);

    const parsedJson = json ? JSON.parse(json) : [];

    return (
        <div>
            {parsedJson.length > 0 ? (
                parsedJson.map(item => (
                    <ResultItem key={item.id} item={item} />
                ))
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default GetSavedResults;
