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

    // Get the raw text first for debugging
    const rawText = await response.text();
    console.log('Raw API Response text:', rawText);
    
    // Then parse it as JSON
    let result;
    try {
      result = JSON.parse(rawText);
    } catch (e) {
      console.error('Failed to parse response as JSON:', e);
      return {
        reply: 'Error: Could not parse server response as JSON'
      };
    }
    
    console.log('Parsed API Response:', result);
    
    // Super simple approach - just extract the response property if it exists
    if (result && typeof result === 'object' && result.response) {
      return {
        reply: result.response
      };
    }
    
    // If we couldn't find the response property, just return the raw text
    return {
      reply: 'Could not find response in API result. Raw response was: ' + rawText.substring(0, 200) + '...'
    };
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};
