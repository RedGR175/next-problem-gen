const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:4000'

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
