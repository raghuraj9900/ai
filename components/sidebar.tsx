"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, FolderGit2, Clock, ToggleRight, ToggleLeft } from "lucide-react";
import { MockProject } from "@/lib/mock-data";
import Link from "next/link";

interface SidebarProps {
  projects: MockProject[];
}

export function Sidebar({ projects }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-[#181818] border-r border-[#00f6ff]/20 transition-all duration-300 z-40 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-[#00f6ff]/10">
            {!isCollapsed && (
              <h2 className="text-lg font-semibold text-[#00f6ff]">Projects</h2>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-[#00f6ff]/10 text-[#00f6ff] transition-all duration-300 hover:scale-110"
            >
              {isCollapsed ? (
                <ChevronRight className="h-5 w-5" />
              ) : (
                <ChevronLeft className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            {projects.length === 0 ? (
              <div className="p-4 text-center text-[#808080]">
                {!isCollapsed && <p className="text-sm">No projects yet</p>}
              </div>
            ) : (
              <div className="space-y-2">
                {projects.map((project) => (
                  <Link
                    key={project.repoId}
                    href={`/owner-docs?repo=${project.repoId}`}
                    className="block group"
                  >
                    <div className="p-3 rounded-lg bg-[#1e1e1e] hover:bg-[#252525] border border-[#00f6ff]/10 hover:border-[#00f6ff]/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                      {isCollapsed ? (
                        <div className="flex justify-center">
                          <FolderGit2 className="h-5 w-5 text-[#00f6ff]" />
                        </div>
                      ) : (
                        <>
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center space-x-2 flex-1 min-w-0">
                              <FolderGit2 className="h-4 w-4 text-[#00f6ff] flex-shrink-0" />
                              <span className="text-sm font-medium text-[#e0e0e0] truncate">
                                {project.repoName}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 text-xs text-[#808080] mb-1">
                            <Clock className="h-3 w-3" />
                            <span>{project.lastGenerated}</span>
                          </div>

                          <div className="flex items-center space-x-2">
                            {project.autoUpdate ? (
                              <ToggleRight className="h-4 w-4 text-[#33ff99]" />
                            ) : (
                              <ToggleLeft className="h-4 w-4 text-[#808080]" />
                            )}
                            <span className="text-xs text-[#808080]">
                              Auto-update {project.autoUpdate ? "on" : "off"}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>

      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-64"
        }`}
      />
    </>
  );
}
