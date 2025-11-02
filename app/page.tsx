"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Database, PenTool } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center justify-center px-6">
      {/* Header */}
      <header className="absolute top-5 right-5 flex items-center gap-4">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              Sign Up
            </Button>
          </SignUpButton>
        </SignedOut>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mt-12"
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Build Smarter Profiles with <span className="font-black">AI</span>
        </motion.h1>

        <p className="text-slate-300 text-lg sm:text-xl mb-8">
          Generate professional summaries, highlight your strengths, and get
          skill recommendations instantly using{" "}
          <span className="font-semibold text-emerald-400">Gemini AI</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/dashboard">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-lg px-6 py-3">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/cold-email">
            <Button
              variant="outline"
              className="border-white/30 text-white text-lg px-6 py-3 hover:bg-white/10"
            >
              Cold Email Generator
            </Button>
          </Link>
          <a
            href="https://github.com/your-repo-here"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outline"
              className="border-white/30 text-white text-lg px-6 py-3 hover:bg-white/10"
            >
              View Source
            </Button>
          </a>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl"
      >
        <FeatureCard
          icon={<Brain className="w-8 h-8 text-emerald-400" />}
          title="AI-Powered Summaries"
          desc="Generate tailored, recruiter-ready profile summaries in seconds."
        />
        <FeatureCard
          icon={<PenTool className="w-8 h-8 text-sky-400" />}
          title="Skill Suggestions"
          desc="Get intelligent skill recommendations to strengthen your resume."
        />
        <FeatureCard
          icon={<Database className="w-8 h-8 text-blue-400" />}
          title="Secure Cloud Storage"
          desc="Your profile data is safely stored with Clerk auth and PostgreSQL."
        />
      </motion.section>

      {/* Footer */}
      <footer className="mt-24 text-slate-500 text-sm text-center">
        © {new Date().getFullYear()} AI Profile Builder · Built with Next.js,
        Clerk, Prisma, and Gemini API
      </footer>
    </main>
  );
}

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
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
