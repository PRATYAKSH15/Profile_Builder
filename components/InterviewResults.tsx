// app/components/InterviewResults.tsx
"use client";
import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  raw: string;
};

export default function InterviewResults({ raw }: Props) {
  // raw expected to be markdown string or JSON string.
  // If it's JSON with structured Q&A we could parse; we'll try JSON first.
  let parsed: { question?: string; answer?: string; tests?: string }[] | null = null;
  try {
    const maybe = JSON.parse(raw);
    if (Array.isArray(maybe)) parsed = maybe;
  } catch {
    parsed = null;
  }

  if (parsed) {
    return (
      <div className="space-y-4 mt-6">
        {parsed.map((item, idx) => (
          <details key={idx} className="p-4 border rounded-md">
            <summary className="font-medium">{item.question ?? `Question ${idx + 1}`}</summary>
            <div className="mt-2 prose max-w-none">
              <p><strong>Answer:</strong></p>
              <p>{item.answer}</p>
              {item.tests && <p><em>Tests:</em> {item.tests}</p>}
            </div>
          </details>
        ))}
      </div>
    );
  }

  // fallback: render markdown
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Generated Q&A</h2>
      <div className="prose max-w-none">
        <ReactMarkdown>{raw}</ReactMarkdown>
      </div>
    </div>
  );
}
