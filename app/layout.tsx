import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peter McMaster — Software Engineer",
  description:
    "Portfolio of Peter McMaster, MS Computer Science (ML) at Columbia University. Software engineer specializing in AI/ML systems, full-stack development, and high-performance computing.",
  keywords: [
    "Peter McMaster",
    "software engineer",
    "Columbia University",
    "machine learning",
    "full-stack",
    "React",
    "Python",
    "PyTorch",
  ],
  openGraph: {
    title: "Peter McMaster — Software Engineer",
    description:
      "MS CS (ML) at Columbia. Experience in AI/ML, full-stack, and scientific computing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
