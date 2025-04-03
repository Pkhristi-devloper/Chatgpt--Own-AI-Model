/* eslint-disable no-unused-vars */
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

let api = "AIzaSyD1-2AF2vU4gy2NIE6DwwXxmeGoZscxiUQ";

const genAI = new GoogleGenerativeAI(api);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseModalities: ["TEXT"], // Ensure text response
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    // Starting chat session
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    // Sending prompt
    const result = await chatSession.sendMessage(prompt);

    // Checking if response is valid
    if (!result.response || !result.response.candidates) {
      throw new Error("Invalid response from Gemini AI");
    }

    // Collect response text
    let finalResponse = ""; // To store the full response

    const candidates = result.response.candidates;
    candidates.forEach((candidate) => {
      if (candidate.content && candidate.content.parts) {
        candidate.content.parts.forEach((part) => {
          finalResponse += part.text + "\n"; // Accumulate response
        });
      } else {
        console.log("No content received from Gemini AI");
      }
    });

    console.log("Gemini AI Response:", finalResponse);
    return finalResponse; // ✅ Returning the response
  } catch (error) {
    console.error("Error occurred:", error);
    return "Error occurred while fetching response"; // Return error message
  }
}

export default run;
