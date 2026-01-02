"use client";
import { motion } from "framer-motion";

const skills = [
    "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB",
    "Next.js", "Tailwind CSS", "WordPress", "SEO", "Git",
    "Google Analytics", "HTML5", "CSS3", "Bootstrap", "React Native"
];

export default function Skills() {
    return (
        <section className="py-10 bg-[var(--color-primary)]/5 border-y border-[var(--color-primary)]/10 overflow-hidden">
            <div className="flex relative">
                <motion.div
                    className="flex gap-12 whitespace-nowrap px-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...skills, ...skills, ...skills].map((skill, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-xl md:text-2xl font-bold text-white/40 hover:text-[var(--color-primary)] transition-colors cursor-default">
                                {skill}
                            </span>
                            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]/30" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
