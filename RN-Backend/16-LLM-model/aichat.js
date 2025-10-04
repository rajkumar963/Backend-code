const { GoogleGenAI } =require ("@google/genai");

const ai = new GoogleGenAI({ apiKey:"AIzaSyDyIGsgYyKoxGBqNOkeivbK8lYB0EgE7y0" });

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ type: "text", text: msg }],
  });
  return response.text;
}

module.exports = main;