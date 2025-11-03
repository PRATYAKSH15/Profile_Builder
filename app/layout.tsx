import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AI Profile Builder",
  description: "Build smarter profiles with AI — resume summaries, skills, cold emails, and cover letters.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-slate-50 text-slate-800 min-h-screen flex flex-col font-inter">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
