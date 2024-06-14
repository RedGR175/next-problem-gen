const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4000";

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }
  return response.json();
};

export const submitPrompt = async (promptData) => {
  const response = await fetch(`${serverUrl}/ask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ promptData }),
  });

  const data = await handleResponse(response);
  console.log("Response from server:", data);
  return data;
};

export const getDiagram = async (latexCode) => {
  const response = await fetch(`${serverUrl}/render`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ latexCode }),
  });

  const data = await handleResponse(response);
  console.log("Response from server:", data);

  if (!data.response) {
    throw new Error("No rendered URL returned in the response");
  }

  return data.response;
};

export const getSavedResults = async () => {
  const response = await fetch(`${serverUrl}/getSavedResults`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await handleResponse(response);
  console.log("Response from server:", data);
  return data.response;
};

export const addResult = async (result) => {
  const response = await fetch(`${serverUrl}/addResult`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      problem: result.problem,
      solution: result.solution,
      diagram: result.diagram,
    }),
  });

  const data = await handleResponse(response);
  console.log("Response from server:", data);
  return data.response;
};

export const removeResult = async (id) => {
  try {
    const response = await fetch(`${serverUrl}/removeResult`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    await handleResponse(response);
  } catch (error) {
    console.error("Error in removing result:", error);
    throw error;
  }
};
