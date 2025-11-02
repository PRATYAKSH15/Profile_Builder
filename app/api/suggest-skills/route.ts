import { NextResponse } from "next/server";
import { suggestSkillsPrompt } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { skills } = await req.json();
    const suggestion = await suggestSkillsPrompt(skills);
    return NextResponse.json({ suggestion });
  } catch (error) {
    return NextResponse.json({ error: "Error suggesting skills" }, { status: 500 });
  }
}
