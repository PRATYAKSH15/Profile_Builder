import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { userInfo } = await req.json();

    const prompt = `
    You are an expert career coach and resume analyst.
    Based on the user's skills, interests, and background, suggest the 3 most suitable job roles for them.
    For each role, include:
    - Job title
    - Confidence score (out of 100)
    - Short reason (1-2 lines)

    Respond in JSON format:
    {
      "roles": [
        {"title": "Role 1", "confidence": 85, "reason": "Explanation..."},
        {"title": "Role 2", "confidence": 78, "reason": "Explanation..."},
        {"title": "Role 3", "confidence": 73, "reason": "Explanation..."}
      ]
    }

    User details:
    """${userInfo}"""
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    let text = result.response.text().trim();

    // 🧹 Clean up Markdown-style code blocks
    if (text.startsWith("```")) {
      text = text.replace(/```json|```/g, "").trim();
    }

    // 🧠 Try parsing JSON
    let feedback;
    try {
      feedback = JSON.parse(text);
    } catch (err) {
      console.warn("Failed to parse AI JSON:", text);
      feedback = { roles: [{ title: "Error parsing AI response", confidence: 0, reason: text }] };
    }

    return NextResponse.json({ feedback });
  } catch (error) {
    console.error("Job Role Matcher Error:", error);
    return NextResponse.json({ error: "Failed to match job roles" }, { status: 500 });
  }
}
