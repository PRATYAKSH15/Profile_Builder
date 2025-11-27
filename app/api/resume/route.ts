import { NextRequest, NextResponse } from "next/server";
import pdfParse from "pdf-parse";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const file = data.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const pdfData = await pdfParse(buffer);
  const resumeText = pdfData.text;

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
Analyze resume and generate 10 interview questions with strong answers:
${resumeText}
`;

  const result = await model.generateContent(prompt);
  const interviewQnA = result.response.text();

  return NextResponse.json({ interviewQnA });
}
