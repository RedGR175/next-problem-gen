const pool = require('./db');

const addProblem = async (problem, solution, diagram) => {
    const query = `
        INSERT INTO ai_results (problem, solution, diagram) 
        VALUES ($1, $2, $3)
        RETURNING *;  -- This will return the inserted row
    `;
    const values = [problem, solution, diagram];

    try {
        const result = await pool.query(query, values);
        console.log('Inserted:', result.rows[0]);  // Log the inserted row
        return result.rows[0];  // Return the inserted row
    } catch (error) {
        throw error;
    }
} 

const getProblems = async () => {
    const query = `SELECT * FROM ai_results`;

    try {
        const result = await pool.query(query);
        console.log(result.rows);  // Log the inserted row
        return result.rows  // Return the inserted row
    } catch (error) {
        throw error;
    }
} 

module.exports = { addProblem, getProblems }