import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vedicbyte - AI-Powered GTM Operations",
  description:
    "Accelerating growth through intelligent technology. We build embedded GTM teams, AI-powered workflows, and modern cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} min-h-screen overflow-x-hidden text-neutral-900 font-sans bg-[#FBFBFB] relative`}
      >
        {children}
      </body>
    </html>
  );
}
