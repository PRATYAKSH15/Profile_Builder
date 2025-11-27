import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("Missing GEMINI_API_KEY in environment variables");
}

const client = new GoogleGenerativeAI(API_KEY);

function buildPrompt(resumeText: string, jobRole?: string) {
  const roleLine = jobRole ? `For role: ${jobRole}\n` : "";
  return `
You are an expert technical interviewer and career coach.
Based on the resume content below, generate 10 realistic interview questions and high-quality sample answers.
- For each item provide: Question, Sample Answer (1-3 paragraphs), and which skill/experience it tests.
- Give output as Markdown. Also include a JSON array at the end under a header "### JSON_OUTPUT" which is an array of objects like:
  [{ "question": "...", "answer":"...", "tests":"..."}]

${roleLine}
Resume:
${resumeText}

Be concise, specific to the candidate's experience, and avoid generic filler questions.
`;
}

export async function generateInterviewQnA(
  resumeText: string,
  jobRole = ""
): Promise<string> {
  const prompt = buildPrompt(resumeText, jobRole);

  const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });

  const response = await model.generateContent(prompt);

  const text = response?.response?.text?.() ?? "";

  return String(text);
}
