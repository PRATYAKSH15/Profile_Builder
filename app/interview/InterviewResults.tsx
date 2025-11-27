"use client";
import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  result: string;
}

export default function InterviewResults({ result }: Props) {
  if (!result) return null;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Generated Interview Q&A</h2>

      <div className="prose prose-lg whitespace-pre-wrap bg-gray-50 p-4 rounded-lg shadow-md max-h-[600px] overflow-y-auto border">
        <ReactMarkdown>{result}</ReactMarkdown>
      </div>
    </div>
  );
}
