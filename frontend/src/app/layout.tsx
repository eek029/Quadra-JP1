import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quadra do Condomínio",
  description: "Sistema de reservas da quadra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(
        inter.className,
        "min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white antialiased"
      )}>
        <main className="min-h-[92vh] flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
