export const sendChatMessage = async (message) => {
  try {
    const response = await fetch('http://172.19.0.1:80/api/gemini/chat-gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        query: message,
        limit: 10,
        threshold: 0.8
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    return {
      reply: result.reply || 'No response found.',
      sources: result.sources || []
    };
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};
