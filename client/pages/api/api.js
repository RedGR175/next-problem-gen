const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:4000'  //sets the server URL to localhost if ran locally

// Submits the prompt to the server
export const submitPrompt = async (promptData) => {
  const response = await fetch(`${serverUrl}/ask`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ promptData }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  console.log(`Response from server `,data, typeof data)
  return data;
};

// Sends request to server for diagram to be created
export const getDiagram = async (latexCode) => {
  try {
    const response = await fetch(`${serverUrl}/render`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ latexCode }),  // Ensure the server expects an object with the key 'latexCode'
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Response from server:`, data);

    if (!data.response) {  // Verify that the key 'response' exists
      throw new Error('No rendered URL returned in the response');
    }

    return data.response;  // Return the URL from the 'response' key
  } catch (error) {
    console.error('Error in getDiagram:', error);
    throw error;  // Rethrow the error to handle it in the component
  }
};

export const getSavedResults = async () => {
  try {
    const response = await fetch(`${serverUrl}/getSavedResults`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Ensure the server expects an object with the key 'latexCode'
    });

    if (!response.ok) {
      console.log(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Response from server:`, data);


    return data.response;  
  } catch (error) {
    console.error('Error in fetching results:', error);
    throw error;  // Rethrow the error to handle it in the component
  }
};

export const addResult = async (result) => {
  try {
    const response = await fetch(`${serverUrl}/addResult`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'problem': result.problem,
        'solution': result.solution,
        'diagram': result.diagram
      })
    });

    if (!response.ok) {
      console.log(`Request failed with status: ${response.status}`);
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Response from server:`, data);

    return data.response;  // Return the URL from the 'response' key
  } catch (error) {
    console.error('Error in adding result:', error);
    throw error;  // Rethrow the error to handle it in the component
  }
};

export const removeResult = async (id) => {
  try {
    const response = await fetch(`${serverUrl}/removeResult`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id})

    });

  } catch (error) {
    console.error('Error in removing result:', error);
    throw error; 
  }
};