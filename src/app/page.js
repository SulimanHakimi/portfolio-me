"use client";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  const content = {
    en: {
      aboutTitle: "About Me",
      aboutText: "I am a passionate and skilled full-stack web developer with expertise in JavaScript, React.js, Node.js, and MongoDB. My hands-on experience includes building dynamic web applications using React.js, WordPress, Node.js, and more. I thrive on problem-solving and optimizing web applications for scalability, SEO, and performance."
    },
    fa: {
      aboutTitle: "درباره من",
      aboutText: "من یک توسعه‌دهنده وب فول استک پرشور و ماهر با تخصص در جاوا اسکریپت، ری‌اکت، نود جی‌اس و مونگو دی‌بی هستم. تجربه عملی من شامل ساخت برنامه‌های وب پویا با استفاده از ری‌اکت، وردپرس، نود جی‌اس و موارد دیگر است. من از حل مسائل و بهینه‌سازی برنامه‌های وب برای مقیاس‌پذیری، سئو و عملکرد لذت می‌برم."
    }
  };

  const text = content[language];

  return (
    <main className="min-h-screen bg-[var(--color-background)] overflow-hidden">
      <Hero />
      <Skills />

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            <span className="text-[var(--color-primary)]">/</span> {text.aboutTitle}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            {text.aboutText}
          </p>
        </motion.div>
      </section>

      <Experience />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}
