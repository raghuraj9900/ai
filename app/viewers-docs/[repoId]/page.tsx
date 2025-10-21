"use client";

import { Navbar } from "@/components/navbar";
import { MarkdownViewer } from "@/components/markdown-viewer";
import { mockReadme } from "@/lib/mock-data";
import { ExternalLink, Share2, Github, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ViewersDocs({ params }: { params: { repoId: string } }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const repoUrl = "https://github.com/user/awesome-project";
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Project Documentation",
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      toast.success("Link copied to clipboard!", { duration: 2000 });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]" : "bg-gradient-to-b from-[#f5f5f5] via-[#ffffff] to-[#f5f5f5]"}`}>
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className={`text-4xl font-bold mb-2 ${theme === "dark" ? "bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] bg-clip-text text-transparent" : "text-[#1a1a1a]"}`}>
                Project Documentation
              </h1>
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 ${theme === "dark" ? "text-[#808080] hover:text-[#00f6ff]" : "text-[#606060] hover:text-[#0088ff]"} transition-colors duration-300`}
              >
                <Github className="h-4 w-4" />
                <span className="text-sm">View on GitHub</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-lg ${theme === "dark" ? "bg-[#1e1e1e] border border-[#00f6ff]/40 hover:border-[#00f6ff] text-[#00f6ff]" : "bg-white border border-[#e0e0e0] hover:border-[#0088ff] text-[#0088ff]"} transition-all duration-300`}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              <button
                onClick={handleShare}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg ${theme === "dark" ? "bg-[#1e1e1e] border border-[#00f6ff]/40 hover:border-[#00f6ff] text-[#00f6ff]" : "bg-white border border-[#e0e0e0] hover:border-[#0088ff] text-[#0088ff]"} transition-all duration-300`}
              >
                <Share2 className="h-5 w-5" />
                <span className="font-medium">Share</span>
              </button>
            </div>
          </div>

          <div className={`rounded-2xl overflow-hidden border ${theme === "dark" ? "bg-gradient-to-br from-[#1e1e1e] to-[#181818] border-[#00f6ff]/20" : "bg-white border-[#e0e0e0]"}`}>
            <div className={`px-8 py-6 border-b ${theme === "dark" ? "border-[#00f6ff]/10" : "border-[#e0e0e0]"}`}>
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${theme === "dark" ? "bg-[#ff3366]" : "bg-[#ff5f56]"}`} />
                <div className={`w-3 h-3 rounded-full ${theme === "dark" ? "bg-[#ffaa00]" : "bg-[#ffbd2e]"}`} />
                <div className={`w-3 h-3 rounded-full ${theme === "dark" ? "bg-[#33ff99]" : "bg-[#27c93f]"}`} />
                <span className={`ml-4 text-sm font-mono ${theme === "dark" ? "text-[#808080]" : "text-[#606060]"}`}>
                  README.md
                </span>
              </div>
            </div>

            <div className={`p-8 ${theme === "dark" ? "bg-[#0d0d0d]" : "bg-[#fafafa]"}`}>
              <div className={theme === "light" ? "light-theme" : ""}>
                <MarkdownViewer content={mockReadme} />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className={`text-sm ${theme === "dark" ? "text-[#808080]" : "text-[#606060]"} mb-4`}>
              Generated with DocGen
            </p>
            <a
              href="/"
              className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg ${theme === "dark" ? "bg-gradient-to-r from-[#00f6ff]/20 to-[#bb33ff]/20 border border-[#00f6ff]/40 hover:border-[#00f6ff] text-[#00f6ff]" : "bg-[#0088ff] hover:bg-[#0066cc] text-white"} transition-all duration-300`}
            >
              <span className="font-medium">Create Your Own Documentation</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>

      <style jsx>{`
        .light-theme :global(h1),
        .light-theme :global(h2),
        .light-theme :global(h3) {
          color: #1a1a1a !important;
        }
        .light-theme :global(p),
        .light-theme :global(li),
        .light-theme :global(span) {
          color: #2a2a2a !important;
        }
        .light-theme :global(code) {
          background-color: #f0f0f0 !important;
          color: #00aa00 !important;
        }
        .light-theme :global(pre) {
          background-color: #f5f5f5 !important;
          border-color: #e0e0e0 !important;
        }
        .light-theme :global(pre code) {
          color: #00aa00 !important;
        }
        .light-theme :global(a) {
          color: #0088ff !important;
        }
      `}</style>
    </div>
  );
}
