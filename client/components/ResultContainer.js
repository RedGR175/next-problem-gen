import React, { useState, useEffect } from 'react';
import { getSavedResults } from '../pages/api/api';
import ResultItem from './ResultItem';

const GetSavedResults = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchSavedResults = async () => {
            const response = await getSavedResults();
            setItems(response);
        };

        fetchSavedResults();
    }, []);

    const handleDelete = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <div>
            {items.length > 0 ? (
                items.map(item => (
                    <ResultItem key={item.id} item={item} onDelete={handleDelete} />
                ))
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default GetSavedResults;
