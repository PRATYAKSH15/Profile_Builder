"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Brain,
  PenTool,
  Mail,
  FileText,
  Sparkles,
  Briefcase,
  Headphones,
  Lightbulb,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative flex flex-col items-center text-center py-28 px-6 overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-7xl font-extrabold text-slate-900 leading-tight"
        >
          Future-Ready Career Profile
          <br />
          <span className="text-emerald-600">Smarter Tools for Better Results</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl text-lg sm:text-xl text-slate-600 mt-6"
        >
          Create a powerful online presence. AI generates summaries, skills,
          emails & more — tailored to your goals using{" "}
          <span className="text-emerald-600 font-semibold">Gemini AI</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mt-10"
        >
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8"
            >
              Create Profile
            </Button>
          </Link>
          <Link href="/pricing">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-slate-300 hover:bg-slate-100"
            >
              Pricing
            </Button>
          </Link>
        </motion.div>
        

        {/* Scroll Animated Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-xl mx-auto text-center mt-20"
        >
          <Stat value="10K+" label="Profiles Enhanced" />
          <Stat value="1.2K+" label="Resumes Improved" />
          <Stat value="98%" label="Positive Feedback" />
        </motion.div>
      </section>

      {/* ---------- ABOUT SECTION ---------- */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] [background-size:20px_20px] opacity-40" />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* LEFT SIDE - Typewriter Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-left space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 leading-tight">
              <span className="inline-block border-r-4 border-emerald-500 pr-2 animate-typing overflow-hidden whitespace-nowrap">
                About AI Profile Builder 👩🏻‍🎓
              </span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              AI Profile Builder empowers students and professionals to showcase
              their strengths with confidence. Powered by Google’s Gemini AI, it
              helps you build a standout profile that highlights your potential.
            </p>

            {/* <Link href="/dashboard"> */}
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-lg px-6"
            >
              Explore below for more
            </Button>
            {/* </Link> */}
          </motion.div>

          {/* RIGHT SIDE - Feature Points */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-left md:pl-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Why to use? 🚀
            </h3>
            <ul className="space-y-4 text-slate-600 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">•</span>
                Generate impactful profile summaries with Gemini AI
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">•</span>
                Identify missing or trending skills in your domain
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">•</span>
                Craft professional outreach or connection messages
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">•</span>
                Get personalized insights to enhance your portfolio
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-slate-800"
        >
          Key Features
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Brain className="text-emerald-500 w-8 h-8" />}
            title="AI Profile Summary"
            desc="Generate professional summaries tailored to your background and skills."
          />
          <FeatureCard
            icon={<PenTool className="text-sky-500 w-8 h-8" />}
            title="Resume Analyzer"
            desc="Score and improve your resume for ATS and recruiter visibility."
          />
          <FeatureCard
            icon={<Mail className="text-blue-500 w-8 h-8" />}
            title="Cold Email Generator"
            desc="Create polished outreach emails for recruiters or clients instantly."
          />
          <FeatureCard
            icon={<FileText className="text-emerald-500 w-8 h-8" />}
            title="Cover Letter Creator"
            desc="Craft job-ready cover letters customized to the role."
          />
          <FeatureCard
            icon={<Sparkles className="text-pink-500 w-8 h-8" />}
            title="Interview Q&A"
            desc="Generate realistic interview questions and AI-powered answers."
          />
          <FeatureCard
            icon={<Briefcase className="text-indigo-500 w-8 h-8" />}
            title="Job Role Matcher"
            desc="Find the best job roles based on your skills and experience."
          />
          <FeatureCard
            icon={<Lightbulb className="text-amber-500 w-8 h-8" />}
            title="Skill Suggestions"
            desc="Discover missing skills to boost your career profile."
          />
          <FeatureCard
            icon={<Headphones className="text-red-500 w-8 h-8" />}
            title="Support & Assistance"
            desc="Easily contact our team for help or feature requests."
          />
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
          <StepCard
            step="1"
            title="Enter Your Details"
            desc="Provide basic info like name, skills, and target role."
          />
          <StepCard
            step="2"
            title="AI Generates Content"
            desc="Gemini AI crafts optimized summaries, emails, and letters for you."
          />
          <StepCard
            step="3"
            title="Review & Save"
            desc="Instantly copy or save your AI-generated results securely."
          />
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
              Yes, your profile data is securely stored in PostgreSQL with Clerk
              authentication.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Which AI model powers this app?</AccordionTrigger>
            <AccordionContent>
              The app uses Google’s Gemini 1.5 / 2.5 models for generating
              summaries, skills, and emails.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Can I download my results?</AccordionTrigger>
            <AccordionContent>
              Yes, all generated content can be copied or exported to PDF
              instantly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Do I need an account to use it?</AccordionTrigger>
            <AccordionContent>
              Yes, sign in with Clerk to save your generated content and access
              all features.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-100 to-slate-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-800"
        >
          Loved by Students & Professionals
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Aarav Mehta"
            role="Computer Science Student"
            feedback="The AI summary generator saved me hours! My resume now looks professional and recruiter-ready."
          />
          <TestimonialCard
            name="Neha Kapoor"
            role="Marketing Intern"
            feedback="The cold email tool helped me connect with startups — got two internship offers!"
          />
          <TestimonialCard
            name="Rohit Sharma"
            role="Full-Stack Developer"
            feedback="Loved the minimal UI and Gemini AI integration. Feels like a real SaaS product."
          />
        </div>
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
          Join thousands of users using AI to level up their resumes and
          outreach. Get started in seconds — no design skills needed.
        </p>
        <Link href="/dashboard">
          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-slate-100 px-6 text-lg font-semibold"
          >
            Start Now
          </Button>
        </Link>
      </section>
    </main>
  );
}

/* ------------------- Helper Components ------------------- */

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg border border-slate-100 text-left"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-slate-600 text-sm">{desc}</p>
    </motion.div>
  );
}

function StepCard({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) {
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

function TestimonialCard({
  name,
  role,
  feedback,
}: {
  name: string;
  role: string;
  feedback: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left"
    >
      <p className="text-slate-600 italic mb-4">“{feedback}”</p>
      <div>
        <h4 className="font-semibold text-slate-800">{name}</h4>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </motion.div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileInView={{ scale: [0.8, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <h3 className="text-4xl font-bold text-slate-900">{value}</h3>
      <p className="text-slate-600 text-sm mt-1">{label}</p>
    </motion.div>
  );
}
