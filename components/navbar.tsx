"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, FileText, Home, CreditCard, FolderGit2, Eye } from "lucide-react";
import { mockUser } from "@/lib/mock-data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = true;

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/dashboard", label: "Dashboard", icon: FolderGit2 },
    { href: "/payment", label: "Pricing", icon: CreditCard },
    { href: "/owner-docs", label: "My Docs", icon: FileText },
    { href: "/viewers-docs/repo-1", label: "View Docs", icon: Eye },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-md border-b border-[#00f6ff]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <FileText className="h-8 w-8 text-[#00f6ff] transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300" />
              <div className="absolute inset-0 blur-lg bg-[#00f6ff]/30 group-hover:bg-[#00f6ff]/50 transition-all duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#00f6ff] to-[#bb33ff] bg-clip-text text-transparent">
              DocGen
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-[#e0e0e0] hover:text-[#00f6ff] transition-all duration-300 flex items-center space-x-2 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00f6ff]/0 via-[#00f6ff]/10 to-[#00f6ff]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Icon className="h-4 w-4" />
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}

            {isAuthenticated && (
              <div className="ml-4 flex items-center space-x-3">
                <div className="relative group">
                  <img
                    src={mockUser.avatar}
                    alt="Profile"
                    className="h-9 w-9 rounded-full border-2 border-[#00f6ff]/50 group-hover:border-[#bb33ff] transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full blur-md bg-[#00f6ff]/20 group-hover:bg-[#bb33ff]/30 transition-all duration-300" />
                </div>
                <button
                  onClick={() => window.location.href = "/api/auth/logout"}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#bb33ff]/10 to-[#00f6ff]/10 border border-[#bb33ff]/30 text-[#e0e0e0] hover:border-[#bb33ff] transition-all duration-300"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#00f6ff] hover:text-[#bb33ff] transition-colors duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#121212] border-t border-[#00f6ff]/20 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#e0e0e0] hover:text-[#00f6ff] hover:bg-[#00f6ff]/10 transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            {isAuthenticated && (
              <button
                onClick={() => window.location.href = "/api/auth/logout"}
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#bb33ff]/10 to-[#00f6ff]/10 border border-[#bb33ff]/30 text-[#e0e0e0] hover:border-[#bb33ff] transition-all duration-300 text-left"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
