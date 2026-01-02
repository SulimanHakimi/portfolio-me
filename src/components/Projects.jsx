"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Reusing project data
const projects = [
    {
        title: { en: "Etrat Elm", fa: "عترت علم" },
        category: "Education Platform",
        year: "2025",
        link: "https://etratelm.com",
        image: "/images/etrat.png"
    },
    {
        title: { en: "Uudex Shop", fa: "فروشگاه اودکس" },
        category: "E-Commerce",
        year: "2024",
        link: "https://uudex.fi",
        image: "/images/uudex.png"
    },
    {
        title: { en: "Volvera", fa: "وبسایت ویلورا" },
        category: "Corporate Site",
        year: "2025",
        link: "https://volvera.se",
        image: "/images/volvera.png"
    },
    {
        title: { en: "Power Force PaitBall Website", fa: "وبسایت کلپ پاور فورس" },
        category: "Website",
        year: "2025",
        link: "https://paintball.sheen.af",
        image: "/images/paintball.png"
    }
];

export default function Projects() {
    const { language } = useLanguage();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    // Transform scroll progress to horizontal translation
    // For RTL (Dari), start from the end (right) and scroll left
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        language === 'fa' ? ["-200%", "0%"] : ["0%", "-200%"]
    );

    const content = {
        en: { title: "Selected Works" },
        fa: { title: "پروژه‌های منتخب" }
    };

    return (
        <section ref={targetRef} id="projects" className="relative h-[300vh] bg-background">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

                <div className={`absolute top-12 z-20 ${language === 'fa' ? 'right-8 md:right-12' : 'left-8 md:left-12'}`}>
                    <h2 className="text-[4rem] font-black tracking-tighter text-outline stroke-black/20 text-transparent">
                        WORKS (4)
                    </h2>
                </div>

                <div className={`absolute bottom-12 z-20 w-64 text-xs font-mono text-gray-500 ${language === 'fa' ? 'right-8 md:right-12 text-right' : 'left-8 md:left-12'}`}>
                    {language === 'fa' ? '← برای مشاهده گالری اسکرول کنید' : 'SCROLL TO EXPLORE THE GALLERY →'}
                </div>

                <motion.div
                    style={{ x }}
                    className={`flex gap-12 md:gap-32 px-12 md:px-32 items-center ${language === 'fa' ? 'flex-row-reverse' : ''}`}
                >
                    {projects.map((project, i) => (
                        <ProjectItem key={i} project={project} index={i} language={language} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function ProjectItem({ project, index, language }) {
    return (
        <div className="relative group w-[80vw] md:w-[60vw] h-[60vh] flex-shrink-0 flex flex-col justify-between p-4 bg-white border border-black/10 hover:border-black transition-colors duration-500">
            {/* Header */}
            <div className="flex justify-between items-start border-b border-black/10 pb-4 mb-4">
                <div className="flex flex-col">
                    <span className="text-xs font-mono text-gray-500 uppercase">0{index + 1} / {project.category}</span>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter mt-2">{project.title[language]}</h3>
                </div>
                <a
                        href={project.link}
                    target="_blank"
                    className="w-12 h-12 bg-[#EB5939] flex items-center justify-center rounded-full text-white hover:scale-110 transition-transform"
                >
                    <ArrowUpRight size={20} />
                </a>
            </div>

            {/* Image Container */}
            <div className="relative w-full h-full overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                    src={project.image}
                    alt={project.title[language]}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end pt-4 font-mono text-xs uppercase">
                <span>{project.year}</span>
                <span>Designed & Developed</span>
            </div>
        </div>
    );
}
