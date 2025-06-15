"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetPortal,
} from "@/components/ui/sheet";
import {
  BookOpen,
  Upload,
  Search,
  Map,
  Users,
  Menu,
  Moon,
  Sun,
  Zap,
} from "lucide-react";
import { useTheme } from "next-themes";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: BookOpen },
    { href: "/overview", label: "Overview", icon: Zap },
    { href: "/how-it-works", label: "How It Works", icon: Map },
    { href: "/upload", label: "Upload IP", icon: Upload },
    { href: "/registry", label: "Registry", icon: Search },
    { href: "/roadmap", label: "Roadmap", icon: Users },
  ];

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-[10vw]">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <BookOpen className="h-6 w-6 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm animate-pulse"></div>
            </div>
            <span className="font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              ResearchX
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center flex-1 px-8">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-primary flex items-center space-x-1 group"
              >
                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9 px-0"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button asChild size="sm" className="animate-pulse-glow">
            <Link href="/upload">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
