// app/interview/page.tsx
import React from "react";
import UploadResume from "./UploadResume";

export const metadata = {
  title: "Interview Q&A Generator",
  description: "Upload resume PDF and generate realistic interview Q&A using Gemini",
};

export default function InterviewPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Generate Interview Questions</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Upload your resume (PDF). We'll extract the text and generate realistic interview questions & answers.
      </p>

      <UploadResume />
    </main>
  );
}
