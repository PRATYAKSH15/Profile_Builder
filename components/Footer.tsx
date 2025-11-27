// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <motion.footer
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="bg-white border-t border-slate-200 mt-12"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-8 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
//         <div>
//           <h2 className="font-semibold text-lg text-emerald-600">AI Profile Builder</h2>
//           <p className="text-sm text-slate-500 mt-1">
//             Build smarter resumes and outreach messages with Gemini AI.
//           </p>
//         </div>
//         <div className="flex justify-center sm:justify-end gap-5 mt-4 sm:mt-0">
//           <Link href="/" className="text-slate-500 hover:text-emerald-500 text-sm">Home</Link>
//           <Link href="/faq" className="text-slate-500 hover:text-emerald-500 text-sm">FAQ</Link>
//           <Link href="https://github.com/your-repo" target="_blank" className="text-slate-500 hover:text-emerald-500 text-sm">
//             GitHub
//           </Link>
//         </div>
//       </div>
//       <p className="text-center text-xs text-slate-400 py-4 border-t border-slate-100">
//         © {new Date().getFullYear()} AI Profile Builder · Built with Next.js, Clerk, Prisma & Gemini AI
//       </p>
//     </motion.footer>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-slate-900 text-slate-300 pt-12 pb-6 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            CareerAI
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Build smarter resumes, better outreach, and get hired faster using AI.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold text-slate-200 mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resume-analyzer" className="hover:text-emerald-400">Resume Analyzer</Link></li>
            <li><Link href="/cold-email" className="hover:text-emerald-400">Cold Email Generator</Link></li>
            <li><Link href="/interview" className="hover:text-emerald-400">Interview Q&A</Link></li>
            <li><Link href="/pricing" className="hover:text-emerald-400">Pricing</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-slate-200 mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-emerald-400">Home</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-slate-200 mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-emerald-400">Terms</Link></li>
            <li><Link href="/" className="hover:text-emerald-400">Privacy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-6">
        <p className="text-xs text-slate-500">
          © {year} CareerAI — Empowering Careers with Smart AI ✨
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            className="hover:text-emerald-400 transition"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="hover:text-emerald-400 transition"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-emerald-400 transition"
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
