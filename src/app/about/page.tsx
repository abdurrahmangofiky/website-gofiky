"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    const socials = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/abdurrahman-gofiky",
        },
        {
            name: "GitHub",
            icon: Github,
            url: "https://github.com/abdurrahmangofiky",
        },
        {
            name: "Email Me",
            icon: Mail,
            url: "mailto:abdurrahman.gofikyy@gmail.com",
        },
        {
            name: "Instagram",
            icon: Instagram,
            url: "https://www.instagram.com/zoldyckgfky_?igsh=ZzZtZ2JnaWM5cTdj&utm_source=qr",
        },
    ];

    return (
        <main className="min-h-screen bg-zinc-950 pt-24 px-4 pb-12">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header Section */}
                <section className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    {/* Foto Profil */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                        <Image
                            src="/profil.jpeg"
                            alt="Foto Profil Abdurrahman Gofiky"
                            fill
                            className="object-cover rounded-full border-2 border-zinc-700"
                        />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                            Abdurrahman Gofiky
                        </h1>
                        <p className="text-xl text-zinc-400">
                            Mahasiswa Informatika
                        </p>
                    </div>
                </section>

                {/* Bio Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">About Me</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Halo! Saya adalah seorang mahasiswa Informatika yang memiliki ketertarikan mendalam pada Machine Learning, Natural Language Processing (NLP), dan Web Development. Saya senang membangun solusi inovatif yang menggabungkan kecerdasan buatan dengan pengalaman pengguna yang intuitif.
                    </p>
                </section>

                {/* Connect & Socials Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Connect & Socials</h2>
                    <div className="flex flex-wrap gap-4">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors group"
                            >
                                <social.icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                                <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">
                                    {social.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {["Python", "ML.NET", "Next.js", "Laravel", "Mikrotik"].map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Experience Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">Experience</h2>
                    <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-medium text-white">Web Developer Intern</h3>
                            <span className="text-sm text-zinc-500">Internship (KP)</span>
                        </div>
                        <p className="text-blue-400 mb-4">Badan Pusat Statistik (BPS)</p>
                        <p className="text-zinc-400">
                            Membangun website survei internal untuk mengelola data dan responden, meningkatkan efisiensi proses pengumpulan data statistik.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
