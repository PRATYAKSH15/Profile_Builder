import { NextResponse } from "next/server";
import { generateSummaryPrompt } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const summary = await generateSummaryPrompt(data);
    return NextResponse.json({ summary });
  } catch (error) {
    return NextResponse.json({ error: "Error generating summary" }, { status: 500 });
  }
}
