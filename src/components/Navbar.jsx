"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Home, User, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
    const { language, toggleLanguage } = useLanguage();

    const navs = [
        { name: "Home", href: "/", icon: <Home size={20} /> },
        { name: "About", href: "#about", icon: <User size={20} /> },
        { name: "Work", href: "#projects", icon: <Briefcase size={20} /> },
        { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-2xl">
            {navs.map((item, i) => (
                <Link
                    key={i}
                    href={item.href}
                    className="p-3 rounded-full text-black hover:bg-black hover:text-white transition-all duration-300 relative group"
                >
                    {item.icon}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {item.name}
                    </span>
                </Link>
            ))}

            <div className="h-6 w-px bg-black/10 mx-2"></div>

            <button
                onClick={toggleLanguage}
                className="px-4 py-2 bg-black text-white text-xs font-bold uppercase rounded-full hover:bg-[#EB5939] transition-colors"
            >
                {language === 'en' ? 'FA' : 'EN'}
            </button>
        </div>
    );
}
