import { Outfit, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const outfit = Outfit({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"], variable: "--font-outfit" });
const noto = Noto_Naskh_Arabic({ subsets: ["arabic"], variable: "--font-noto" });

export const metadata = {
  title: "Suliman Hakimi | Selected Works",
  description: "Portfolio of a Full Stack Developer & Motion Designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${outfit.variable} ${noto.variable} antialiased bg-background text-foreground selection:bg-black selection:text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
