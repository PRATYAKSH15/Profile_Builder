// lib/pdfExtract.ts
import pdfParse from "pdf-parse";

/**
 * Extract text from a PDF Buffer using pdf-parse.
 * Returns a cleaned text string.
 */
export async function extractTextFromPdf(buffer: Buffer): Promise<string> {
  const data = await pdfParse(buffer);
  let text = data?.text ?? "";

  // Basic cleanup
  text = text.replace(/\r\n/g, "\n").replace(/\n{2,}/g, "\n\n").trim();

  // If pdf-parse failed to extract, try a fallback or throw
  if (!text) {
    throw new Error("Failed to extract text from PDF.");
  }

  return text;
}
