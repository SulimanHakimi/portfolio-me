"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, Github, Code2 } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    const { language } = useLanguage();

    const projects = [
        {
            title: "Laatulakki Oy",
            category: "E-Commerce",
            desc: {
                en: "A premium e-commerce platform for customizable graduation caps. Features a complex 3D-like configurator, real-time pricing, and seamless checkout flow.",
                fa: "یک پلتفرم تجارت الکترونیک ممتاز برای کلاه‌های فارغ‌التحصیلی قابل شخصی‌سازی. دارای پیکربندی پیچیده شبه سه‌بعدی، قیمت‌گذاری لحظه‌ای و جریان پرداخت روان."
            },
            tags: ["Next.js", "MongoDB", "Tailwind", "Stripe"],
            link: "https://laatulakki.fi",
            image: "/images/project1.jpg" // Placeholder
        },
        {
            title: "Portfolio V1",
            category: "Personal Brand",
            desc: {
                en: "My previous portfolio website showcasing early works. Built with React and Styled Components.",
                fa: "وب‌سایت نمونه‌کار قبلی من که کارهای اولیه را نمایش می‌دهد. ساخته شده با React و Styled Components."
            },
            tags: ["React", "Styled Components", "Framer Motion"],
            link: "#",
            image: "/images/project2.jpg" // Placeholder
        },
        // Add more projects here
    ];

    const content = {
        en: { title: "Featured Projects", view: "View Project" },
        fa: { title: "پروژه‌های منتخب", view: "مشاهده پروژه" }
    };

    return (
        <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    <span className="text-[var(--color-primary)]">/</span> {content[language].title}
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-[#1E293B] rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--color-primary)]/50 transition-all duration-500"
                    >
                        {/* Image Placeholder (Dark gradient if no image) */}
                        <div className="h-64 bg-gradient-to-br from-gray-800 to-black relative overflow-hidden">
                            <div className="absolute inset-0 bg-[var(--color-primary)]/10 group-hover:bg-transparent transition-colors duration-500" />
                            <Code2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white/10 group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        <div className="p-8 relative">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-1 block">{project.category}</span>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">{project.title}</h3>
                                </div>
                                <a href={project.link} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-[var(--color-primary)] hover:text-black transition-all">
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>

                            <p className="text-gray-400 mb-6 line-clamp-3">
                                {project.desc[language]}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-black/30 text-gray-300 text-xs rounded-full border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
