"use client";
import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

export default function ClientLayout({ children }) {
    return (
        <LanguageProvider>
            <SmoothScroll />
            <Navbar />
            {children}
        </LanguageProvider>
    );
}
