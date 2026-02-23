import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The GDG Showcase",
  description:
    "Ontario Tech's brightest builders take the stage to present their projects to a panel of industry judges. Compete for amazing prizes, gain real feedback, and showcase what you've built.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratSans.variable} bg-background text-white`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
