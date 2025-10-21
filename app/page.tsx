"use client";

import { Navbar } from "@/components/navbar";
import { Sparkles, Zap, Shield, Github, ArrowRight, Code2, Bot, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Code2,
      title: "AI-Powered README Generation",
      description: "Generate comprehensive, professional READMEs in seconds using cutting-edge AI models including ChatGPT and Claude.",
      gradient: "from-[#00f6ff] to-[#0088ff]",
    },
    {
      icon: RefreshCw,
      title: "Auto-Updating Documentation",
      description: "Keep your docs always fresh with automatic updates triggered by repository changes via webhooks.",
      gradient: "from-[#bb33ff] to-[#8800ff]",
    },
    {
      icon: Bot,
      title: "Multiple AI Integrations",
      description: "Choose from ChatGPT, Claude, and other premium AI models to match your project's needs and style.",
      gradient: "from-[#33ff99] to-[#00cc77]",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with GitHub OAuth integration and reliable infrastructure for your documentation.",
      gradient: "from-[#ff3366] to-[#cc0044]",
    },
    {
      icon: Sparkles,
      title: "Beautiful Formatting",
      description: "Generate documentation that looks as good as it reads with modern, responsive design and syntax highlighting.",
      gradient: "from-[#ffaa00] to-[#ff6600]",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate complete documentation in under 10 seconds with optimized AI processing and caching.",
      gradient: "from-[#00ffff] to-[#0099ff]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
      <Navbar />

      <main className="pt-16">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#00f6ff]/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-40 right-20 w-96 h-96 bg-[#bb33ff]/20 rounded-full blur-[120px] animate-pulse delay-700" />
            <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#33ff99]/20 rounded-full blur-[100px] animate-pulse delay-1000" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#00f6ff]/10 border border-[#00f6ff]/30 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="h-4 w-4 text-[#00f6ff]" />
              <span className="text-sm text-[#00f6ff] font-medium">Revolutionary Documentation Generation</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <span className="bg-gradient-to-r from-[#00f6ff] via-[#bb33ff] to-[#00f6ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Revolutionary Documentation
              </span>
              <br />
              <span className="text-[#e0e0e0]">for Developers</span>
            </h1>

            <p className="text-xl text-[#a0a0a0] mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Generate stunning, AI-powered README files and documentation for your GitHub repositories in seconds. Keep them automatically updated with every commit.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <button
                onClick={() => window.location.href = "/api/auth/github"}
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,246,255,0.6)] flex items-center space-x-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#bb33ff] to-[#00f6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Github className="h-6 w-6 relative z-10" />
                <span className="relative z-10">Sign in with GitHub</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <Link
                href="/payment"
                className="px-8 py-4 rounded-xl border-2 border-[#00f6ff]/50 text-[#e0e0e0] font-semibold text-lg hover:border-[#00f6ff] hover:bg-[#00f6ff]/10 transition-all duration-300 hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] bg-clip-text text-transparent">
                Powerful Features
              </h2>
              <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto">
                Everything you need to create and maintain world-class documentation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-[#1e1e1e] to-[#181818] rounded-2xl border border-[#00f6ff]/20 hover:border-[#00f6ff]/60 p-8 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,246,255,0.3)] animate-in fade-in slide-in-from-bottom duration-700"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00f6ff]/5 to-[#bb33ff]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-[#e0e0e0] mb-3 group-hover:text-[#00f6ff] transition-colors duration-300">
                        {feature.title}
                      </h3>

                      <p className="text-[#a0a0a0] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] bg-clip-text text-transparent">
              Ready to Transform Your Documentation?
            </h2>
            <p className="text-xl text-[#a0a0a0] mb-10 leading-relaxed">
              Join thousands of developers who have revolutionized their documentation workflow
            </p>
            <button
              onClick={() => window.location.href = "/api/auth/github"}
              className="group px-10 py-5 rounded-xl bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] text-white font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(0,246,255,0.8)] inline-flex items-center space-x-3"
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </section>

        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#00f6ff]/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <Code2 className="h-6 w-6 text-[#00f6ff]" />
                <span className="text-lg font-bold bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] bg-clip-text text-transparent">
                  DocGen
                </span>
              </div>

              <div className="flex items-center space-x-8 text-sm text-[#808080]">
                <a href="#" className="hover:text-[#00f6ff] transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-[#00f6ff] transition-colors duration-300">Terms of Service</a>
                <a href="https://x.ai/grok" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f6ff] transition-colors duration-300">
                  Contact
                </a>
              </div>

              <p className="text-sm text-[#808080]">
                © 2025 DocGen. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
