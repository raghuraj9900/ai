"use client";

import { Navbar } from "@/components/navbar";
import { Check, Zap, Crown, Gift, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Payment() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: "Free",
      price: 0,
      icon: Gift,
      gradient: "from-[#808080] to-[#606060]",
      features: [
        "2 READMEs per week",
        "Basic AI generation",
        "No auto-updates",
        "Community support",
        "Public documentation hosting",
      ],
      limits: "Perfect for trying out the platform",
      popular: false,
    },
    {
      name: "Pro",
      price: 10,
      icon: Zap,
      gradient: "from-[#00f6ff] to-[#0088ff]",
      features: [
        "10 READMEs per week",
        "ChatGPT & Claude AI access",
        "5 auto-update projects",
        "Priority support",
        "Custom documentation themes",
        "Advanced analytics",
      ],
      limits: "Ideal for individual developers",
      popular: true,
    },
    {
      name: "Enterprise",
      price: 20,
      icon: Crown,
      gradient: "from-[#bb33ff] to-[#8800ff]",
      features: [
        "50 READMEs per week",
        "All AI models (ChatGPT, Claude, GPT-4)",
        "20 auto-update projects",
        "Premium support",
        "Custom branding",
        "API access",
        "Team collaboration",
        "White-label options",
      ],
      limits: "Best for teams and organizations",
      popular: false,
    },
  ];

  const handleSubscribe = (price: number) => {
    if (price === 0) {
      window.location.href = "/api/auth/github";
    } else {
      window.location.href = `/api/stripe/checkout?plan=${price}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#00f6ff]/10 border border-[#00f6ff]/30 mb-6">
              <Zap className="h-4 w-4 text-[#00f6ff]" />
              <span className="text-sm text-[#00f6ff] font-medium">Simple, Transparent Pricing</span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h1>

            <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto">
              Start for free, upgrade as you grow. All plans include beautiful documentation hosting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 transition-all duration-500 hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-br from-[#1e1e1e] to-[#181818] border-2 border-[#00f6ff] shadow-[0_0_60px_rgba(0,246,255,0.3)]"
                      : "bg-gradient-to-br from-[#1e1e1e] to-[#181818] border border-[#00f6ff]/20 hover:border-[#00f6ff]/60"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] text-white text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.gradient} bg-opacity-10 mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#e0e0e0] mb-2">
                      {plan.name}
                    </h3>

                    <div className="flex items-baseline mb-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] bg-clip-text text-transparent">
                        ${plan.price}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-[#a0a0a0] ml-2">/month</span>
                      )}
                    </div>

                    <p className="text-sm text-[#a0a0a0]">{plan.limits}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="p-1 rounded-full bg-[#00f6ff]/20">
                            <Check className="h-4 w-4 text-[#00f6ff]" />
                          </div>
                        </div>
                        <span className="text-[#e0e0e0]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSubscribe(plan.price)}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] text-white hover:shadow-[0_0_40px_rgba(0,246,255,0.6)] hover:scale-105"
                        : "bg-[#1e1e1e] border border-[#00f6ff]/40 text-[#e0e0e0] hover:border-[#00f6ff] hover:bg-[#00f6ff]/10"
                    }`}
                  >
                    {plan.price === 0 ? "Get Started Free" : "Subscribe Now"}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1e1e1e] to-[#181818] rounded-2xl border border-[#00f6ff]/20 p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-[#00f6ff]/10 rounded-xl">
                    <ExternalLink className="h-6 w-6 text-[#00f6ff]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#e0e0e0] mb-2">
                    Need Enterprise Solutions?
                  </h3>
                  <p className="text-[#a0a0a0] mb-4">
                    For custom pricing, dedicated support, and tailored solutions for large teams, visit our detailed pricing page.
                  </p>
                  <a
                    href="https://x.ai/grok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-[#00f6ff]/20 border border-[#00f6ff]/40 text-[#00f6ff] hover:border-[#00f6ff] hover:bg-[#00f6ff]/30 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-[#e0e0e0] mb-6">
                Frequently Asked Questions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-[#1e1e1e] rounded-xl p-6 border border-[#00f6ff]/10">
                  <h4 className="font-semibold text-[#00f6ff] mb-2">
                    Can I change plans later?
                  </h4>
                  <p className="text-[#a0a0a0] text-sm">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </div>
                <div className="bg-[#1e1e1e] rounded-xl p-6 border border-[#00f6ff]/10">
                  <h4 className="font-semibold text-[#00f6ff] mb-2">
                    How does billing work?
                  </h4>
                  <p className="text-[#a0a0a0] text-sm">
                    All plans are billed monthly. You can cancel anytime with no hidden fees or commitments.
                  </p>
                </div>
                <div className="bg-[#1e1e1e] rounded-xl p-6 border border-[#00f6ff]/10">
                  <h4 className="font-semibold text-[#00f6ff] mb-2">
                    What AI models do you support?
                  </h4>
                  <p className="text-[#a0a0a0] text-sm">
                    Pro includes ChatGPT and Claude. Enterprise adds GPT-4 and all premium models.
                  </p>
                </div>
                <div className="bg-[#1e1e1e] rounded-xl p-6 border border-[#00f6ff]/10">
                  <h4 className="font-semibold text-[#00f6ff] mb-2">
                    Is there a free trial?
                  </h4>
                  <p className="text-[#a0a0a0] text-sm">
                    The Free plan lets you try the platform with no credit card required. Upgrade when ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
