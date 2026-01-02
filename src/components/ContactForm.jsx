"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import MagneticButton from "./ui/MagneticButton";

export default function ContactForm() {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle");

    const content = {
        en: {
            title: "Let's Talk",
            description: "Have a project in mind? Let's create something functional and beautiful together",
            placeholderName: "Your Name",
            placeholderEmail: "Your Email",
            placeholderMsg: "Tell me about your project...",
            send: "Send Request",
            success: "Received",
            error: "Error sending message. Please try again."
        },
        fa: {
            title: "گفتگو کنیم",
            description: "پروژه‌ای در ذهن دارید؟ بیایید چیزی کاربردی و زیبا با هم بسازیم",
            placeholderName: "نام شما",
            placeholderEmail: "ایمیل شما",
            placeholderMsg: "درباره پروژه خود بگویید...",
            send: "الرسال درخواست",
            success: "دریافت شد",
            error: "خطا در ارسال پیام. لطفاً دوباره تلاش کنید"
        }
    };

    const text = content[language];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="bg-[#EB5939] py-32 px-4 md:px-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[12vw] md:text-[8vw] font-black leading-none tracking-tighter mb-12"
                    >
                        {text.title}
                    </motion.h2>
                    <p className="text-xl md:text-2xl font-mono opacity-80 max-w-md">
                        {text.description}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-0 border-t border-white/20">
                    <div className="group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={text.placeholderName}
                            required
                            className="w-full bg-transparent border-b border-white/20 py-8 text-3xl md:text-4xl placeholder:text-white/40 outline-none focus:border-white transition-colors"
                        />
                    </div>
                    <div className="group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={text.placeholderEmail}
                            required
                            className="w-full bg-transparent border-b border-white/20 py-8 text-3xl md:text-4xl placeholder:text-white/40 outline-none focus:border-white transition-colors"
                        />
                    </div>
                    <div className="group">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="2"
                            placeholder={text.placeholderMsg}
                            required
                            className="w-full bg-transparent border-b border-white/20 py-8 text-3xl md:text-4xl placeholder:text-white/40 outline-none focus:border-white transition-colors resize-none"
                        ></textarea>
                    </div>

                    <div className="pt-12">
                        <button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className="w-full py-6 bg-white text-[#EB5939] font-bold text-xl uppercase tracking-widest hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? (language === 'fa' ? "در حال ارسال..." : "Sending...") : status === "success" ? text.success : text.send}
                        </button>
                    </div>
                    {status === "error" && (
                        <p className="text-black bg-white inline-block px-4 py-2 mt-4 font-bold">
                            {text.error}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
