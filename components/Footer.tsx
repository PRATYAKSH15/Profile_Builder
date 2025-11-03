"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white border-t border-slate-200 mt-12"
    >
      <div className="max-w-7xl mx-auto px-6 py-8 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
        <div>
          <h2 className="font-semibold text-lg text-emerald-600">AI Profile Builder</h2>
          <p className="text-sm text-slate-500 mt-1">
            Build smarter resumes and outreach messages with Gemini AI.
          </p>
        </div>
        <div className="flex justify-center sm:justify-end gap-5 mt-4 sm:mt-0">
          <Link href="/" className="text-slate-500 hover:text-emerald-500 text-sm">Home</Link>
          <Link href="/faq" className="text-slate-500 hover:text-emerald-500 text-sm">FAQ</Link>
          <Link href="https://github.com/your-repo" target="_blank" className="text-slate-500 hover:text-emerald-500 text-sm">
            GitHub
          </Link>
        </div>
      </div>
      <p className="text-center text-xs text-slate-400 py-4 border-t border-slate-100">
        © {new Date().getFullYear()} AI Profile Builder · Built with Next.js, Clerk, Prisma & Gemini AI
      </p>
    </motion.footer>
  );
}
