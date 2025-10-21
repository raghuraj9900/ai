"use client";

import { useState } from "react";
import { FileText, RefreshCw, ToggleRight, ToggleLeft, ExternalLink, Clock } from "lucide-react";
import { MockRepo } from "@/lib/mock-data";

interface RepoCardProps {
  repo: MockRepo;
  onGenerateReadme: (repoId: string) => void;
  onToggleAutoUpdate: (repoId: string, enabled: boolean) => void;
}

export function RepoCard({ repo, onGenerateReadme, onToggleAutoUpdate }: RepoCardProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [autoUpdate, setAutoUpdate] = useState(repo.autoUpdate || false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    await onGenerateReadme(repo.id);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  const handleToggle = async () => {
    const newValue = !autoUpdate;
    setAutoUpdate(newValue);
    await onToggleAutoUpdate(repo.id, newValue);
  };

  return (
    <div className="group relative bg-gradient-to-br from-[#1e1e1e] to-[#181818] rounded-xl border border-[#00f6ff]/20 hover:border-[#00f6ff]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,246,255,0.3)] hover:scale-[1.02] p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00f6ff]/5 to-[#bb33ff]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#00f6ff]/10 rounded-lg">
              <FileText className="h-5 w-5 text-[#00f6ff]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] group-hover:text-[#00f6ff] transition-colors duration-300">
                {repo.name}
              </h3>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#808080] hover:text-[#00f6ff] flex items-center space-x-1 transition-colors duration-300"
              >
                <span className="truncate max-w-[200px]">{repo.url}</span>
                <ExternalLink className="h-3 w-3 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {repo.lastGenerated && (
          <div className="flex items-center space-x-2 text-sm text-[#808080] mb-4">
            <Clock className="h-4 w-4" />
            <span>Last generated: {repo.lastGenerated}</span>
          </div>
        )}

        <div className="flex items-center justify-between gap-3">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#00f6ff]/20 to-[#bb33ff]/20 border border-[#00f6ff]/40 hover:border-[#00f6ff] text-[#e0e0e0] hover:text-[#00f6ff] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group/btn"
          >
            <RefreshCw className={`h-4 w-4 ${isGenerating ? "animate-spin" : "group-hover/btn:rotate-180 transition-transform duration-500"}`} />
            <span className="font-medium">
              {isGenerating ? "Generating..." : "Generate README"}
            </span>
          </button>

          <button
            onClick={handleToggle}
            className={`px-4 py-2.5 rounded-lg border transition-all duration-300 flex items-center space-x-2 ${
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
            <span className="text-sm font-medium">Auto</span>
          </button>
        </div>

        {isGenerating && (
          <div className="mt-3 h-1 bg-[#1e1e1e] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] animate-pulse" style={{ width: "70%" }} />
          </div>
        )}
      </div>
    </div>
  );
}
