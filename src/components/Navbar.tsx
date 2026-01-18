"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none">
            <nav className="pointer-events-auto flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950/80 p-1 backdrop-blur-md supports-[backdrop-filter]:bg-zinc-950/80">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors",
                                isActive ? "text-white" : "text-zinc-400 hover:text-white"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="bubble"
                                    className="absolute inset-0 z-[-1] rounded-full bg-zinc-800"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {item.name}
                        </Link>
                    )
                })}
            </nav>
        </header>
    );
}
