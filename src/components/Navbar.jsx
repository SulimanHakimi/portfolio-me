"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const { language, toggleLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const navs = {
        en: [
            { name: "Home", href: "/" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" }
        ],
        fa: [
            { name: "خانه", href: "/" },
            { name: "درباره من", href: "#about" },
            { name: "تماس", href: "#contact" }
        ]
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0F172A]/80 border-b border-white/5 font-sans"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="text-2xl font-bold tracking-tighter text-[var(--color-primary)]">
                    Suliman<span className="text-white">.</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navs[language].map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-medium text-gray-300 hover:text-[var(--color-primary)] transition-colors">
                            {item.name}
                        </Link>
                    ))}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-xs text-white"
                    >
                        <Globe className="w-3 h-3" />
                        {language === 'en' ? 'FA' : 'EN'}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden bg-[#0F172A] border-b border-white/10"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navs[language].map((item) => (
                                <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-[var(--color-primary)]">
                                    {item.name}
                                </Link>
                            ))}
                            <button onClick={toggleLanguage} className="flex items-center gap-2 text-[var(--color-primary)]">
                                Change to {language === 'en' ? 'Dari' : 'English'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
