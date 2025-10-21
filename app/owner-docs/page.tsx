"use client";

import { Navbar } from "@/components/navbar";
import { MarkdownViewer } from "@/components/markdown-viewer";
import { mockRepos, mockReadme } from "@/lib/mock-data";
import { FileText, RefreshCw, Download, ToggleRight, ToggleLeft, ExternalLink, Clock, Eye } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function OwnerDocs() {
  const [selectedRepo, setSelectedRepo] = useState(mockRepos[0]);
  const [readmeContent, setReadmeContent] = useState(mockReadme);
  const [isGenerating, setIsGenerating] = useState(false);
  const [autoUpdate, setAutoUpdate] = useState(selectedRepo.autoUpdate || false);

  const handleRegenerate = async () => {
    setIsGenerating(true);
    toast.loading("Regenerating README...", { id: "regenerate" });

    setTimeout(() => {
      toast.success("README regenerated successfully!", { id: "regenerate" });
      setIsGenerating(false);
    }, 2000);
  };

  const handleToggleAutoUpdate = async () => {
    const newValue = !autoUpdate;
    setAutoUpdate(newValue);
    toast.success(
      newValue ? "Auto-update enabled" : "Auto-update disabled",
      { duration: 2000 }
    );
  };

  const handleDownload = () => {
    const blob = new Blob([readmeContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("README downloaded", { duration: 2000 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] bg-clip-text text-transparent mb-2">
              My Documentation
            </h1>
            <p className="text-[#a0a0a0]">
              View and manage your generated documentation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#1e1e1e] to-[#181818] rounded-xl border border-[#00f6ff]/20 p-6 sticky top-24">
                <h2 className="text-xl font-bold text-[#e0e0e0] mb-4 flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-[#00f6ff]" />
                  <span>Your Repositories</span>
                </h2>

                <div className="space-y-3">
                  {mockRepos.map((repo) => (
                    <button
                      key={repo.id}
                      onClick={() => setSelectedRepo(repo)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        selectedRepo.id === repo.id
                          ? "bg-[#00f6ff]/20 border-2 border-[#00f6ff]"
                          : "bg-[#1e1e1e] border border-[#00f6ff]/10 hover:border-[#00f6ff]/50"
                      }`}
                    >
                      <div className="font-medium text-[#e0e0e0] mb-1 truncate">
                        {repo.name}
                      </div>
                      {repo.lastGenerated && (
                        <div className="flex items-center space-x-2 text-xs text-[#808080]">
                          <Clock className="h-3 w-3" />
                          <span>{repo.lastGenerated}</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#1e1e1e] to-[#181818] rounded-xl border border-[#00f6ff]/20 overflow-hidden">
                <div className="p-6 border-b border-[#00f6ff]/20">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-[#e0e0e0] mb-1">
                        {selectedRepo.name}
                      </h2>
                      <a
                        href={selectedRepo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#808080] hover:text-[#00f6ff] flex items-center space-x-1 transition-colors duration-300"
                      >
                        <span>{selectedRepo.url}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    <a
                      href={`/viewers-docs/${selectedRepo.id}`}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#00f6ff]/10 border border-[#00f6ff]/40 text-[#00f6ff] hover:border-[#00f6ff] hover:bg-[#00f6ff]/20 transition-all duration-300"
                    >
                      <Eye className="h-4 w-4" />
                      <span className="text-sm font-medium">Public View</span>
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleRegenerate}
                      disabled={isGenerating}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00f6ff]/20 to-[#bb33ff]/20 border border-[#00f6ff]/40 hover:border-[#00f6ff] text-[#e0e0e0] hover:text-[#00f6ff] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <RefreshCw className={`h-4 w-4 ${isGenerating ? "animate-spin" : ""}`} />
                      <span className="text-sm font-medium">
                        {isGenerating ? "Regenerating..." : "Regenerate"}
                      </span>
                    </button>

                    <button
                      onClick={handleToggleAutoUpdate}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                        autoUpdate
                          ? "bg-[#33ff99]/10 border-[#33ff99]/40 hover:border-[#33ff99] text-[#33ff99]"
                          : "bg-[#808080]/10 border-[#808080]/40 hover:border-[#808080] text-[#808080]"
                      }`}
                    >
                      {autoUpdate ? (
                        <ToggleRight className="h-5 w-5" />
                      ) : (
                        <ToggleLeft className="h-5 w-5" />
                      )}
                      <span className="text-sm font-medium">Auto-update</span>
                    </button>

                    <button
                      onClick={handleDownload}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#1e1e1e] border border-[#00f6ff]/40 hover:border-[#00f6ff] text-[#e0e0e0] hover:text-[#00f6ff] transition-all duration-300"
                    >
                      <Download className="h-4 w-4" />
                      <span className="text-sm font-medium">Download</span>
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6 flex items-center justify-between pb-4 border-b border-[#00f6ff]/10">
                    <h3 className="text-lg font-semibold text-[#00f6ff]">
                      Documentation Preview
                    </h3>
                    {selectedRepo.lastGenerated && (
                      <span className="text-sm text-[#808080]">
                        Last updated: {selectedRepo.lastGenerated}
                      </span>
                    )}
                  </div>

                  <div className="bg-[#0d0d0d] rounded-lg p-8 border border-[#00f6ff]/10">
                    <MarkdownViewer content={readmeContent} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
