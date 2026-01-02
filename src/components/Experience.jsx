"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
    const { language } = useLanguage();

    const experiences = [
        {
            role: "Full Stack Web Developer",
            company: "Laatulakki Oy",
            date: "01/2025 - Present",
            location: "Remote",
            desc: {
                en: "Developing and maintaining the e-commerce platform for Finnish graduation caps. combining traditional craftsmanship with modern web technologies. Focus on SEO, scalability, and seamless user experience.",
                fa: "توسعه و نگهداری پلتفرم تجارت الکترونیک برای کلاه‌های فارغ‌التحصیلی فنلاندی. ترکیب مهارت‌های سنتی با فناوری‌های وب مدرن. تمرکز بر سئو، مقیاس‌پذیری و تجربه کاربری روان."
            }
        },
        {
            role: "Frontend Web Developer",
            company: "Laatulakki Oy",
            date: "06/2024 - 01/2025",
            location: "Remote",
            desc: {
                en: "Built dynamic web applications using React.js and Next.js. Optimized frontend performance and implemented responsive designs ensuring cross-browser compatibility.",
                fa: "ساخت برنامه‌های وب پویا با استفاده از React.js و Next.js. بهینه‌سازی عملکرد فرانت‌اند و پیاده‌سازی طراحی‌های واکنش‌گرا با اطمینان از سازگاری مرورگرها."
            }
        }
    ];

    const content = {
        en: { title: "Experience" },
        fa: { title: "تجربیات کاری" }
    };

    return (
        <section id="experience" className="py-20 max-w-7xl mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-16 text-center"
            >
                <span className="text-[var(--color-primary)]">/</span> {content[language].title}
            </motion.h2>

            <div className="relative border-l border-white/10 ltr:ml-6 rtl:mr-6 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative ltr:pl-8 rtl:pr-8"
                    >
                        {/* Dot */}
                        <div className="absolute top-0 ltr:-left-1.5 rtl:-right-1.5 w-3 h-3 rounded-full bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]" />

                        <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors group">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">{exp.role}</h3>
                                    <p className="text-[var(--color-primary)] font-medium">{exp.company}</p>
                                </div>
                                <div className="flex flex-col items-end text-sm text-gray-400 gap-1">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {exp.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        {exp.location}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                {exp.desc[language]}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
