"use client";

import { BentoGrid } from "@/components/BentoGrid";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-zinc-950 pt-24 px-4 pb-12">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                        My Projects
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Here is a showcase of my technical projects, ranging from Machine Learning and NLP to Web Development and Network Management.
                    </p>
                </div>

                <BentoGrid items={projects} />
            </div>
        </main>
    );
}
