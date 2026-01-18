import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Filter specific projects for Home: "NLP Spam Detection" & "SPK Internship Jepang"
  const featuredProjects = projects.filter(p =>
    p.title.includes("NLP Spam Detection") || p.title.includes("SPK Internship Jepang")
  );

  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-blue-500/30">

      {/* Background decoration */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10">
        <Hero />

        {/* Quick Intro */}
        <section className="flex justify-center -mt-10 mb-20 relative z-20">
          <Link
            href="/about"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800 transition-all text-zinc-300 hover:text-white"
          >
            Lihat Profil Saya
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        {/* Featured Projects */}
        <section id="featured" className="py-10 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-zinc-100">Featured Projects</h2>
          <BentoGrid items={featuredProjects} />

          <div className="flex justify-center mt-10">
            <Link
              href="/projects"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
            >
              Lihat Semua Project
            </Link>
          </div>
        </section>

        <footer className="py-10 text-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Fiky. Built with Next.js & Tailwind.</p>
        </footer>
      </div>
    </main>
  );
}
