"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import { Download, ArrowDown } from "lucide-react";

export default function Hero() {
    const { language } = useLanguage();
    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 500], [0, -100]);

    const content = {
        en: {
            greeting: "Hello, I'm",
            name: "Suliman Hakimi",
            role: "Full Stack Developer & SEO Specialist",
            desc: "I build pixel-perfect, engaging, and accessible digital experiences. Specialized in Next.js, React, and modern web technologies.",
            cta: "View My Work",
            resume: "Download Resume"
        },
        fa: {
            greeting: "سلام، من",
            name: "سلیمان حکیمی",
            role: "توسعه‌دهنده فول استک و متخصص سئو",
            desc: "من تجربیات دیجیتالی دقیق، جذاب و قابل دسترسی می‌سازم. متخصص در Next.js، React و فناوری‌های وب مدرن.",
            cta: "مشاهده نمونه کارها",
            resume: "دانلود رزومه"
        }
    };

    const text = content[language];
    const isRTL = language === 'fa';

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[var(--color-background)]">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] ltr:left-[-10%] rtl:right-[-10%] w-[500px] h-[500px] bg-[var(--color-primary)] opacity-10 blur-[120px] rounded-full animate-float" />
                <div className="absolute bottom-10 ltr:right-[-5%] rtl:left-[-5%] w-[400px] h-[400px] bg-blue-600 opacity-10 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">

                {/* Text Content */}
                <motion.div
                    key={language}
                    initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 md:space-y-8 order-2 md:order-1"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[var(--color-primary)] text-sm font-medium"
                    >
                        <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                        {text.greeting}
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-white tracking-tight">
                        {text.name}
                    </h1>

                    <motion.h2
                        className="text-xl md:text-2xl text-gray-400 font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {text.role}
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-400 max-w-lg leading-relaxed mix-blend-plus-lighter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {text.desc}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 pt-2"
                    >
                        <a href="#projects" className="group relative px-8 py-4 bg-[var(--color-primary)] text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 text-center">
                            <span className="relative z-10">{text.cta}</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        </a>

                        {/* Resume Button - Placeholder Link */}
                        <a href="#" className="group px-8 py-4 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                            <Download className="w-4 h-4" />
                            {text.resume}
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="pt-4"
                    >
                        <SocialLinks />
                    </motion.div>
                </motion.div>

                {/* Image / 3D Parallax */}
                <motion.div style={{ y: yParallax }} className="relative flex justify-center md:justify-end order-1 md:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                        whileHover={{ scale: 1.02, rotate: 2 }}
                        className="relative w-[280px] h-[350px] md:w-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#1E293B]"
                    >
                        <Image
                            src="/images/profile.jpg"
                            alt="Suliman Hakimi"
                            fill
                            className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 ltr:-left-6 rtl:-right-6 bg-[#162032]/90 p-5 rounded-2xl border border-white/5 shadow-2xl backdrop-blur-xl max-w-[200px] hidden md:block"
                    >
                        <div className="text-3xl font-bold text-white mb-1">2+</div>
                        <div className="text-sm text-gray-400">Years of Experience in Web Development</div>
                    </motion.div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 hidden md:block"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
}
