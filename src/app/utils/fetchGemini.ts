import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText";

export async function fetchGemini(userQuery: string, context: string) {
  try {
    const response = await axios.post(
      `${GEMINI_ENDPOINT}?key=${GEMINI_API_KEY}`,
      {
        prompt: `${userQuery}\n\n Context:\n${context}`,
        temperature: 0.7,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "";
  }
}
