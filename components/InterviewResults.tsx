"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { ClipboardCopy } from "lucide-react";

type QAItem = {
  question: string;
  answer: string;
  tests?: string;
};

type Props = {
  raw: string;
};

export default function InterviewResults({ raw }: Props) {
  if (!raw) return null;

  // Try JSON parsing first
  let qaData: QAItem[] = [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) qaData = parsed;
  } catch {
    qaData = [];
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="mx-auto mt-8 max-w-3xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        Interview Q&A
      </h2>

      {/* If JSON parsed successfully → show UI cards */}
      {qaData.length > 0 ? (
        <Accordion type="single" collapsible className="space-y-4">
          {qaData.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`q-${idx}`}
              className="border rounded-lg shadow-sm bg-white"
            >
              <AccordionTrigger className="text-left p-4 text-lg font-medium hover:bg-gray-50">
                {idx + 1}. {item.question}
              </AccordionTrigger>

              <AccordionContent className="p-4 bg-gray-50 space-y-3 text-gray-700 rounded-b-lg">
                <p>
                  <strong>Answer:</strong> {item.answer}
                </p>

                {item.tests && (
                  <p className="text-sm text-gray-600">
                    <strong>Skill Tested:</strong> {item.tests}
                  </p>
                )}

                <button
                  onClick={() =>
                    copyToClipboard(
                      `Q: ${item.question}\nA: ${item.answer}\nSkill Tested: ${item.tests ?? ""}`
                    )
                  }
                  className="mt-2 flex items-center gap-2 text-xs border px-3 py-2 rounded-md hover:bg-white"
                >
                  <ClipboardCopy size={14} /> Copy Q&A
                </button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        // Markdown fallback view
        <div className="prose max-w-none whitespace-pre-wrap bg-gray-50 p-4 rounded-lg shadow-md border">
          <ReactMarkdown>{raw}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
