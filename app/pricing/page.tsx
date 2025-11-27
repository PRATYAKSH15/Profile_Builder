"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Free",
    price: "₹0",
    desc: "Get started with essential AI tools",
    features: [
      "Basic Generations (e.g. 10/day)",
      "Community Support",
      "Contact Form Access",
      "Standard Models",
    ],
    button: "Get Started",
    highlighted: false,
  },
  {
    title: "Pro",
    price: "₹299/month",
    desc: "Unlock full AI capabilities",
    features: [
      "Unlimited Generations",
      "Priority Support",
      "Premium AI Models",
      "Resume Q&A + Analysis",
      "Faster Response Speeds",
    ],
    button: "Upgrade Now",
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    desc: "Best for organizations & large teams",
    features: [
      "Dedicated AI Instance",
      "Custom Model Training",
      "Onboarding & SLA Support",
      "Team Management Tools",
    ],
    button: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-10">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-emerald-600 mb-4"
        >
          Choose Your Plan
        </motion.h1>
        <p className="text-center text-gray-600 mb-12">
          Scale your productivity with AI — pick what fits your needs!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border shadow-lg bg-white ${
                plan.highlighted
                  ? "border-emerald-500 shadow-emerald-200 scale-105"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <span className="absolute top-4 right-4 bg-emerald-500 text-white text-sm px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold text-emerald-600 text-center">
                {plan.price}
              </p>
              <p className="text-gray-500 text-center mb-6">{plan.desc}</p>

              <ul className="space-y-3 text-gray-700 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
                {plan.button}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
