"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, PenTool, Mail, FileText, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* ---------- HERO SECTION ---------- */}
      <section className="flex flex-col items-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-600 bg-clip-text text-transparent mb-6"
        >
          Build Smarter Profiles with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-2xl text-lg text-slate-600 mb-8"
        >
          Generate powerful profile summaries, skill suggestions, cold emails, and cover letters — all powered by{" "}
          <span className="text-emerald-500 font-semibold">Gemini AI</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/dashboard">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-lg px-6">
              Get Started
            </Button>
          </Link>
          <Link href="/faq">
            <Button size="lg" variant="outline" className="text-lg px-6">
              Learn More
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-slate-800"
        >
          Key Features
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard icon={<Brain className="text-emerald-500 w-8 h-8" />} title="AI Profile Summary" desc="Generate professional summaries tailored to your background and skills." />
          <FeatureCard icon={<PenTool className="text-sky-500 w-8 h-8" />} title="Skill Suggestions" desc="Discover new in-demand skills relevant to your field." />
          <FeatureCard icon={<Mail className="text-blue-500 w-8 h-8" />} title="Cold Email Generator" desc="Compose polished cold emails for recruiters or clients instantly." />
          <FeatureCard icon={<FileText className="text-emerald-500 w-8 h-8" />} title="Cover Letter Creator" desc="Craft engaging, job-ready cover letters using AI guidance." />
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="py-20 px-6 bg-slate-100 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-slate-800"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StepCard step="1" title="Enter Your Details" desc="Provide basic info like name, skills, and target role." />
          <StepCard step="2" title="AI Generates Content" desc="Gemini AI crafts optimized summaries, emails, and letters for you." />
          <StepCard step="3" title="Review & Save" desc="Instantly copy or save your AI-generated results securely." />
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is my data stored securely?</AccordionTrigger>
            <AccordionContent>
              Yes, your profile data is securely stored in PostgreSQL with Clerk authentication.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Which AI model powers this app?</AccordionTrigger>
            <AccordionContent>
              The app uses Google’s Gemini 1.5 / 2.5 models for generating summaries, skills, and emails.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Can I download my results?</AccordionTrigger>
            <AccordionContent>
              Yes, all generated content can be copied or exported to PDF instantly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Do I need an account to use it?</AccordionTrigger>
            <AccordionContent>
              Yes, sign in with Clerk to save your generated content and access all features.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ---------- CALL TO ACTION ---------- */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-600 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Ready to Build Your AI-Optimized Profile?
        </motion.h2>
        <p className="text-slate-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users using AI to level up their resumes and outreach. Get started in seconds — no design skills needed.
        </p>
        <Link href="/dashboard">
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-6 text-lg font-semibold">
            Start Now
          </Button>
        </Link>
      </section>
    </main>
  );
}

/* ------------------- Helper Components ------------------- */

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg border border-slate-100 text-left"
    >
      <div className="flex items-center gap-3 mb-4">{icon}<h3 className="font-semibold text-lg">{title}</h3></div>
      <p className="text-slate-600 text-sm">{desc}</p>
    </motion.div>
  );
}

function StepCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-lg mb-3 mx-auto">
        {step}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{desc}</p>
    </motion.div>
  );
}
