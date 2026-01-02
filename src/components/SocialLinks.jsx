"use client";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const socialLinks = [
    {
        name: "GitHub",
        icon: <Github className="w-5 h-5" />,
        href: "https://github.com/SulimanHakimi",
        color: "hover:text-white"
    },
    {
        name: "LinkedIn",
        icon: <Linkedin className="w-5 h-5" />,
        href: "https://www.linkedin.com/in/suliman-hakimi",
        color: "hover:text-[#0077b5]"
    },
    {
        name: "WhatsApp",
        icon: <Phone className="w-5 h-5" />,
        href: "https://wa.me/93784966018",
        color: "hover:text-[#25D366]"
    },
    {
        name: "Email",
        icon: <Mail className="w-5 h-5" />,
        href: "mailto:Afgsuliman50@gmail.com",
        color: "hover:text-red-400"
    }
];

export default function SocialLinks({ className = "" }) {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/5 border border-white/5 rounded-full text-gray-400 transition-all hover:scale-110 ${link.color}`}
                    aria-label={link.name}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
}
