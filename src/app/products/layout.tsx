import Link from "next/link";
import { Metadata } from "next";

import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "데모 제품 사이트 | 전체 제품 확인",
  description: "데모 제품을 확인해보세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성옷</Link>
        <a href="/products/man">남성옷</a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
