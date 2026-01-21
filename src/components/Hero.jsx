"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const { language } = useLanguage();
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 100]);

    const content = {
        en: {
            role: "Full Stack Developer",
            location: "Kabul, Afghanistan",
            nameFirst: "SULIMAN",
            nameLast: "HAKIMI",
            available: "Available for new projects",
            scroll: "Scroll"
        },
        fa: {
            role: "توسعه‌دهنده فول استک",
            location: "کابل، افغانستان",
            nameFirst: "سلیمان",
            nameLast: "حکیمی",
            available: "آماده برای پروژه‌های جدید",
            scroll: "اسکرول"
        }
    };

    const text = content[language];

    return (
        <section className="relative min-h-screen bg-grid-pattern pt-20 px-4 md:px-8 border-b border-black/10 flex flex-col justify-between">
            {/* Top Info Bar */}
            <div className="flex justify-between items-start text-xs font-mono uppercase tracking-widest text-gray-500">
                <div className="flex flex-col">
                    <span className="text-black font-bold">Location</span>
                    <span>{text.location}</span>
                </div>
                <div className="flex flex-col text-right">
                    <span className="text-black font-bold">Status</span>
                    <span className="flex items-center gap-2 justify-end">
                        <span className="w-2 h-2 bg-[#EB5939] rounded-full animate-pulse"></span>
                        {text.available}
                    </span>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-12 mb-auto">
                <div className="md:col-span-8 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="text-[17vw] leading-[0.85] font-black tracking-tighter text-black mix-blend-multiply"
                    >
                        {text.nameFirst}
                        <br />
                        <span className="text-outline text-[#EB5939] stroke-black pl-12 md:pl-24 block">
                            {text.nameLast}
                        </span>
                    </motion.h1>
                </div>

                <div className="md:col-span-4 relative mt-12 md:mt-0 h-[40vh] md:h-auto">
                    <motion.div style={{ y }} className="w-full h-full relative">
                        <div className="absolute inset-0 bg-[#EB5939] clip-diagonal z-0"></div>
                        <div className="relative z-10 w-[90%] h-[90%] ml-auto bg-gray-200 overflow-hidden">
                            <Image
                                src="/images/profile.jpg"
                                alt="Profile"
                                fill
                                className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 z-20">
                            <ArrowDownRight size={80} strokeWidth={1} className="text-black rotate-0" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-black/10 text-sm font-bold uppercase tracking-widest">
                <div>(2026)</div>
                <div>Frontend • Backend</div>
                <div className="hidden md:block">UI/UX • Design</div>
                <div className="text-right flex justify-end gap-2 items-center group cursor-pointer">
                    {text.scroll} <div className="w-12 h-px bg-black group-hover:w-20 transition-all"></div>
                </div>
            </div>
        </section>
    );
}
