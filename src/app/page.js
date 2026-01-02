"use client";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen selection:bg-black selection:text-white scroll-smooth cursor-auto">
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Experience />
      <ContactForm />
      <Footer />
    </main>
  );
}
