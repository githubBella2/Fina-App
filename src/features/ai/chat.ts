"use server";

import { ENVIRONMENT } from "@/config/environment";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: ENVIRONMENT.googleGenAIKey,
});
export async function handleChat() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Kamu siapa?",
    config: {},
  });
  console.log(response);
  return response.text;
}
