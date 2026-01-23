import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-zinc-950 py-8 border-t border-zinc-900">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <p className="text-zinc-500 text-sm">
                    © {new Date().getFullYear()} Abdurrahman Gofiky. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
