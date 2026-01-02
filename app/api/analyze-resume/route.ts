import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { resumeText } = await req.json();

    const prompt = `
    You are an expert resume reviewer.
    Analyze this resume text and give:
    1. A score out of 100 (based on clarity, structure, skills, and achievements)
    2. A short one-line summary of your impression
    3. 3 improvement suggestions in bullet points.

    Format your response strictly as JSON with keys: score, summary, suggestions.

    Resume text:
    """${resumeText}"""
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    let text = result.response.text().trim();

    // 🧹 Clean up Gemini’s markdown formatting (```json ... ```)
    if (text.startsWith("```")) {
      text = text.replace(/```json|```/g, "").trim();
    }

    // 🧠 Try parsing JSON safely
    let feedback;
    try {
      feedback = JSON.parse(text);
    } catch (err) {
      console.warn("Failed to parse JSON:", text);
      feedback = { score: 0, summary: "Error parsing AI response.", suggestions: [text] };
    }

    return NextResponse.json({ feedback });
  } catch (error) {
    console.error("Resume Analyzer Error:", error);
    return NextResponse.json({ error: "Failed to analyze resume" }, { status: 500 });
  }
}
