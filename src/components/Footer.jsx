"use client";
import React from 'react';
import { useLanguage } from "@/context/LanguageContext";
import MagneticButton from "./ui/MagneticButton";

export default function Footer() {
    const { language } = useLanguage();

    const links = [
        { name: "GitHub", href: "https://github.com/SulimanHakimi" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/suliman-hakimi" },
        { name: "Email", href: "mailto:Afgsuliman50@gmail.com" }
    ];

    return (
        <footer className="bg-black text-white py-20 px-8 relative overflow-hidden">
            <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                <div>
                    <h3 className="text-[12vw] font-black leading-[0.8] tracking-tighter text-white">
                        SULIMAN
                        <span className="text-[#EB5939]">.</span>
                    </h3>
                </div>

                <div className="flex flex-col gap-4 text-right">
                    <div className="flex justify-end gap-6 mb-8">
                        {links.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                className="text-sm font-bold uppercase tracking-widest hover:text-[#EB5939] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="text-xs font-mono text-gray-500">
                        © 2025 SULIMAN HAKIMI. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </div>

            {/* Giant Background Letter */}
            <div className="absolute -bottom-20 -right-20 text-[30vw] font-black opacity-5 pointer-events-none select-none">
                S
            </div>
        </footer>
    );
}
