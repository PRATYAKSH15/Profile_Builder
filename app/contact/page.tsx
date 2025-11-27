"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    hp: "", // honeypot
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Redirect if not signed in
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "", hp: "" });
      } else {
        console.error("Failed to send message");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded || !isSignedIn) {
    return <div className="text-center mt-20">Checking authentication...</div>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border"
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-emerald-600">
          Contact Us
        </h1>

        {success && (
          <p className="text-green-600 text-center mb-4">
            Your message has been sent successfully!
          </p>
        )}

        <div className="space-y-4">
          {/* Honeypot (hidden for users) */}
          <input
            type="text"
            name="hp"
            value={form.hp}
            onChange={handleChange}
            style={{ display: "none" }}
            autoComplete="off"
          />

          <Input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="Your Email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="min-h-[120px]"
          />

          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </motion.div>
    </main>
  );
}
