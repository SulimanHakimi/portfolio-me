import { Outfit, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const noto = Noto_Naskh_Arabic({ subsets: ["arabic"], variable: "--font-noto" });

export const metadata = {
  title: "Suliman Hakimi | Full Stack Developer",
  description: "Portfolio of a Full Stack Developer & Motion Designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${noto.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <LanguageProvider>
          <SmoothScroll />
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
