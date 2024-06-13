const pool = require('./db');

const addProblem = async (problem, solution, diagram) => {
    const query = `
        INSERT INTO ai_results (problem, solution, diagram) 
        VALUES ($1, $2, $3)
        RETURNING *;
    `;
    const values = [problem, solution, diagram];

    try {
        const result = await pool.query(query, values);
        console.log('Inserted:', result.rows[0]);
        return result.rows[0];
    } catch (error) {
        console.error('Error in addProblem:', error);
        throw error;
    }
};

const removeProblem = async (id) => {
    const query = `DELETE FROM ai_results WHERE id = ${id}`;
    

    try {
        const result = await pool.query(query);
    } catch (error) {
        console.error('Error in removeProblem:', error);
        throw error;
    }
};

const getProblems = async () => {
    const query = `SELECT * FROM ai_results`;

    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error in getProblems:', error);
        throw error;
    }
};
module.exports = { addProblem, getProblems, removeProblem };
