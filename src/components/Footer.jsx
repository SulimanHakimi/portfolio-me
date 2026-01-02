"use client";
import React from 'react';
import { useLanguage } from "@/context/LanguageContext";
import SocialLinks from "./SocialLinks";
import { Heart } from "lucide-react";

export default function Footer() {
    const { language } = useLanguage();

    const content = {
        en: {
            rights: "All rights reserved.",
            built: "Built with passion by Suliman Hakimi."
        },
        fa: {
            rights: "تمامی حقوق محفوظ است.",
            built: "ساخته شده با عشق توسط سلیمان حکیمی."
        }
    };

    return (
        <footer className="bg-[#0F172A] border-t border-white/5 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Logo & Desc */}
                <div className="text-center md:ltr:text-left md:rtl:text-right">
                    <div className="text-2xl font-bold tracking-tighter text-[var(--color-primary)] mb-2">
                        Suliman<span className="text-white">.</span>
                    </div>
                    <p className="text-gray-500 text-sm max-w-xs">{content[language].built}</p>
                </div>

                {/* Socials */}
                <SocialLinks />

                {/* Copyright */}
                <div className="text-gray-600 text-sm flex items-center gap-1">
                    &copy; {new Date().getFullYear()} <span className="text-gray-500">Suliman Hakimi.</span> {content[language].rights}
                </div>
            </div>
        </footer>
    );
}
