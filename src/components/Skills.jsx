"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
    "JavaScript", "React.js", "Next.js", "Node.js", "Express.js",
    "Tailwind", "MongoDB", "React Native", "Google Tools", "WordPress",
    "Git", "AWS", "SEO", "UI/UX Design"
];

export default function Skills() {
    return (
        <section className="bg-background py-32 overflow-hidden border-y border-black/10 bg-grid-pattern">
            <div className="max-w-[100vw]">
                <ParallaxText baseVelocity={-2}>EXPERTISE • SKILLS •</ParallaxText>
                <div className="h-10"></div>
                <ParallaxText baseVelocity={2}>TECHNOLOGIES • TOOLS •</ParallaxText>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-20">
                <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill, i) => (
                        <motion.span
                            key={i}
                            className="px-6 py-3 border border-black/10 text-gray-500 hover:text-white hover:bg-[#EB5939] hover:border-transparent transition-all duration-300 cursor-default text-sm font-mono tracking-widest uppercase backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { useRef } from "react";
import { useScroll, useSpring, useTransform, useMotionValue, useAnimationFrame, wrap } from "framer-motion";

function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
            <motion.div className="font-bold text-[8vw] md:text-[6vw] uppercase text-black/5 leading-[0.85] tracking-tighter flex gap-8" style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}

// Hook to get velocity (simplified)
function useVelocity(value) {
    const velocity = useMotionValue(0);
    const prevValue = useRef(value.get());

    useAnimationFrame((t, delta) => {
        const latest = value.get();
        const d = latest - prevValue.current;
        if (delta > 0) velocity.set(d * (1000 / delta));
        prevValue.current = latest;
    });
    return velocity;
}
