"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
    const { language } = useLanguage();
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const content = {
        en: {
            title: "Get in Touch",
            subtitle: "Have a project in mind? Let's build something amazing together.",
            name: "Your Name",
            email: "Your Email",
            message: "Your Message",
            send: "Send Message",
            sending: "Sending...",
            success: "Message sent successfully!",
            error: "Something went wrong. Please try again."
        },
        fa: {
            title: "تماس با من",
            subtitle: "پروژه‌ای در ذهن دارید؟ بیایید چیزی شگفت‌انگیز بسازیم.",
            name: "نام شما",
            email: "ایمیل شما",
            message: "پیام شما",
            send: "ارسال پیام",
            sending: "در حال ارسال...",
            success: "پیام با موفقیت ارسال شد!",
            error: "مشکلی پیش آمد. لطفا دوباره تلاش کنید."
        }
    };

    const text = content[language];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 px-6 bg-[var(--color-surface)] relative transition-colors">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{text.title}</h2>
                    <p className="text-gray-400 text-lg">{text.subtitle}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-[#0F172A] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">{text.name}</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">{text.email}</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">{text.message}</label>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className="w-full bg-[var(--color-primary)] text-black font-bold py-4 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="animate-spin w-5 h-5" />
                                        {text.sending}
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        {text.success}
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        {text.send}
                                    </>
                                )}
                            </button>
                            {status === "error" && (
                                <p className="mt-4 text-red-400 text-sm flex items-center justify-center gap-2">
                                    <AlertCircle className="w-4 h-4" />
                                    {text.error}
                                </p>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
