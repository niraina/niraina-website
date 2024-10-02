import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/shared/components/theme-provider";
import NavBar from "@/shared/components/nav-bar";
import { JetBrains_Mono } from 'next/font/google';
import { Caveat } from 'next/font/google';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'], // Spécifiez les graisses que vous souhaitez
  variable: '--font-jetbrains-mono',
});

const caveat = Caveat({
  subsets: ['latin'], // Assurez-vous d'inclure le sous-ensemble approprié
  weight: ['400', '500', '600', '700'], // Spécifiez les poids que vous souhaitez
  variable: '--font-caveat', // Définissez une variable CSS pour l'utiliser dans votre classe
});

export const metadata: Metadata = {
  title: "Niraina - Andriamiarintsoa",
  description: "Développeur frontend et intégrateur web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable} ${caveat.variable} antialiased dark:bg-[#17212D] dark:text-[#dddddd]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
