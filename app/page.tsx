"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-background to-muted">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          AI Profile Builder
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          Build smarter, recruiter-ready profiles in just a few clicks.
          <br />
          Powered by <span className="font-semibold text-foreground">Next.js + AI</span>, 
          it helps you write impactful summaries, optimize skills, and generate ATS-friendly resumes instantly.
        </p>

        <div className="flex justify-center gap-6">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-20 text-sm text-muted-foreground"
      >
        <p>
          Built with ❤️ using Next.js, TypeScript, Tailwind CSS, ShadCN UI, and OpenAI.
        </p>
      </motion.div>
    </main>
  );
}
