"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

export default function ColdEmailPage() {
  const [form, setForm] = useState({
    name: "",
    recipient: "",
    context: "",
  });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenerate = async () => {
    setLoading(true);
    setResult("");

    const res = await fetch("/api/generate-cold-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setResult(data.email || "Something went wrong. Please try again.");
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
          AI Cold Email Generator
        </h1>
        <p className="text-slate-300 text-center mb-8">
          Generate personalized, professional cold emails in seconds using
          Gemini AI.
        </p>

        <div className="space-y-4">
          <Input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="bg-white/5 border-white/10 text-white placeholder:text-slate-400"
          />
          <Input
            name="recipient"
            placeholder="Recipient or Company Name"
            value={form.recipient}
            onChange={handleChange}
            className="bg-white/5 border-white/10 text-white placeholder:text-slate-400"
          />
          <Textarea
            name="context"
            placeholder="Purpose (e.g. applying for internship, reaching out for collaboration)"
            value={form.context}
            onChange={handleChange}
            className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 min-h-[120px]"
          />

          <Button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            {loading ? "Generating..." : "Generate Email"}
          </Button>
        </div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 bg-white/5 p-5 rounded-lg border border-white/10 text-slate-100"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg text-emerald-400">
                Generated Email:
              </h2>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(result);
                }}
                className="text-sm text-emerald-300 hover:text-emerald-400 transition"
              >
                📋 Copy
              </button>
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed text-slate-200">
              {result}
            </pre>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}
