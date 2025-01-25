
const fetchAiResponse = async (query, key, setError) => {
  setError("");
  try {
    const response = await fetch(
      "https://api.deepseek.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [{ role: "user", content: query }],
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      setError(`${response.status}`);
      throw new Error(data.error?.message || `HTTP Error ${response.status}`);
      
    }
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("API Error:", error.message);
    
    return null;
  }
};
export default fetchAiResponse;
