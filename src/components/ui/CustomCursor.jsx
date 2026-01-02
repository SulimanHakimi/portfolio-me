"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable elements
            const target = e.target;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setHovering(true);
            } else {
                setHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        return () => window.removeEventListener("mousemove", mouseMove);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-3 h-3 bg-[#EB5939] pointer-events-none z-[100]"
            animate={{
                x: mousePosition.x - 6,
                y: mousePosition.y - 6,
                scale: hovering ? 2.5 : 1,
                rotate: hovering ? 45 : 0
            }}
            transition={{
                type: "spring", stiffness: 300, damping: 20
            }}
        />
    );
}
