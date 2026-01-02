"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const experiences = [
    {
        role: "CEO & Founder",
        company: "Sheen-شین",
        date: "08/2025 - Present",
        desc: {
            en: "I am the founder and CEO of Sheen-شین, a company that specializes in developing high-performance e-commerce solutions",
            fa: "من مسئولیت و مدیریت شین-شین دارم، یک شرکتی که در توسعه راهکارهای تجارت الکترونیک با کارایی بالا تخصص دارد"
        }
    },
    {
        role: "Full Stack Web Developer",
        company: "Laatulakki Oy",
        date: "01/2025 - Present",
        desc: {
            en: "Developing high-performance e-commerce solutions with Next.js & MongoDB.",
            fa: "توسعه راهکارهای تجارت الکترونیک با کارایی بالا با استفاده از Next.js و MongoDB."
        }
    },
    {
        role: "Frontend Web Developer",
        company: "Laatulakki Oy",
        date: "06/2024 - 01/2025",
        desc: {
            en: "Built responsive, beautiful frontend interfaces using React.js.",
            fa: "ساخت رابط‌های کاربری جلویی واکنش‌گرا و زیبا با استفاده از React.js."
        }
    }
];

export default function Experience() {
    const { language } = useLanguage();

    const content = {
        en: { title: "Experience" },
        fa: { title: "تجربیات" }
    };

    return (
        <section id="experience" className="bg-background py-32 px-4 md:px-8 border-b border-black/10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-8 sticky top-32">
                        <span className="w-2 h-2 bg-[#EB5939] inline-block rounded-full mr-2"></span>
                        {content[language].title}
                    </h2>
                </div>

                <div className="md:col-span-8 space-y-12">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-black/10 pt-8"
                        >
                            <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">{exp.date}</div>

                            <div className="space-y-4">
                                <h3 className="text-3xl font-bold leading-none group-hover:text-[#EB5939] transition-colors">{exp.company}</h3>
                                <div className="text-lg font-medium">{exp.role}</div>
                                <p className="text-gray-600 leading-relaxed text-sm max-w-md">
                                    {exp.desc[language]}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
