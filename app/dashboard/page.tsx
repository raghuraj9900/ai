"use client";

import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { RepoCard } from "@/components/repo-card";
import { mockRepos, mockProjects } from "@/lib/mock-data";
import { Plus, GitBranch } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Dashboard() {
  const [repos] = useState(mockRepos);

  const handleGenerateReadme = async (repoId: string) => {
    toast.loading("Generating README...", { id: repoId });

    setTimeout(() => {
      toast.success("README generated successfully!", { id: repoId });
    }, 2000);
  };

  const handleToggleAutoUpdate = async (repoId: string, enabled: boolean) => {
    toast.success(
      enabled ? "Auto-update enabled" : "Auto-update disabled",
      { duration: 2000 }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
      <Navbar />

      <div className="flex pt-16">
        <Sidebar projects={mockProjects} />

        <main className="flex-1 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] bg-clip-text text-transparent mb-2">
                    Your Repositories
                  </h1>
                  <p className="text-[#a0a0a0]">
                    Manage and generate documentation for your GitHub repositories
                  </p>
                </div>

                <button
                  onClick={() => window.location.href = "/api/repos/add"}
                  className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00f6ff]/20 to-[#bb33ff]/20 border border-[#00f6ff]/40 hover:border-[#00f6ff] text-[#e0e0e0] hover:text-[#00f6ff] transition-all duration-300 group"
                >
                  <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                  <span className="font-medium">Add Repository</span>
                </button>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-[#00f6ff]/10 to-[#bb33ff]/10 border border-[#00f6ff]/30">
                <GitBranch className="h-5 w-5 text-[#00f6ff]" />
                <p className="text-sm text-[#e0e0e0]">
                  <span className="font-semibold text-[#00f6ff]">{repos.length}</span> repositories connected
                </p>
              </div>
            </div>

            {repos.length === 0 ? (
              <div className="text-center py-20">
                <div className="inline-flex p-6 rounded-full bg-[#00f6ff]/10 mb-6">
                  <GitBranch className="h-12 w-12 text-[#00f6ff]" />
                </div>
                <h3 className="text-2xl font-bold text-[#e0e0e0] mb-3">
                  No Repositories Yet
                </h3>
                <p className="text-[#a0a0a0] mb-8 max-w-md mx-auto">
                  Connect your first GitHub repository to start generating beautiful documentation
                </p>
                <button
                  onClick={() => window.location.href = "/api/repos/add"}
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,246,255,0.6)]"
                >
                  <Plus className="h-5 w-5" />
                  <span>Add Your First Repository</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {repos.map((repo) => (
                  <RepoCard
                    key={repo.id}
                    repo={repo}
                    onGenerateReadme={handleGenerateReadme}
                    onToggleAutoUpdate={handleToggleAutoUpdate}
                  />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
