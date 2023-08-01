import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";
import styles from "./layout.module.css";
import Link from "next/link";

const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "데모 제품 사이트",
  description: "데모 제품 사이트 입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
