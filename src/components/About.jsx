"use client";
import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "ABOUT ME",
            paragraph1: "I am a Full Stack Developer located in Kabul, Afghanistan. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.",
            paragraph2: "Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and English literature.",
            stats: [
                { label: "Years Exp", value: "03+" },
                { label: "Projects", value: "10+" },
                { label: "Clients", value: "10+" }
            ]
        },
        fa: {
            title: "درباره من",
            paragraph1: "من یک توسعه‌دهنده فول استک در کابل، افغانستان هستم. اشتیاق زیادی به جلوه‌های رابط کاربری، انیمیشن‌ها و خلق تجربیات کاربری بصری و پویا دارم.",
            paragraph2: "فردی منظم، حل‌کننده مسائل، کارمند مستقل و با دقت بالا به جزئیات. طرفدار هنرهای رزمی، فعالیت‌های فضای باز، سریال‌های تلویزیونی و ادبیات انگلیسی.",
            stats: [
                { label: "سال تجربه", value: "+۵" },
                { label: "پروژه‌ها", value: "+۲۰" },
                { label: "مشتریان", value: "+۱۰" }
            ]
        }
    };

    const text = content[language];

    return (
        <section id="about" className="bg-background py-32 px-4 md:px-8 border-b border-black/10">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Title Column */}
                <div className="md:col-span-4">
                    <h2 className="text-[12vw] md:text-[4vw] font-black leading-none tracking-tighter text-black mb-12 md:mb-0 sticky top-32">
                        {text.title}
                        <span className="text-[#EB5939]">.</span>
                    </h2>
                </div>

                {/* Content Column */}
                <div className="md:col-span-8 grid grid-cols-1 gap-16">
                    <div className="space-y-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-light leading-tight text-black"
                        >
                            {text.paragraph1}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl font-mono text-gray-500 leading-relaxed max-w-3xl"
                        >
                            {text.paragraph2}
                        </motion.p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-12 border-y border-black/10 bg-grid-pattern">
                        {text.stats.map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-[4rem] font-black text-[#EB5939] leading-none mb-2">{stat.value}</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-black">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
