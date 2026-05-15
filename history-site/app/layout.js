import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Terror's Turning Point: The KKK and the Collapse of Reconstruction",
  description: "APUSH History Fair Project on the KKK and the Collapse of Reconstruction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <nav className={styles.navbar}>
          <div className={styles.navContainer}>
            <Link href="/" className={styles.logo}>
              <span>History Fair</span>
              <small>Reconstruction</small>
            </Link>
            <ul className={styles.navLinks}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/thesis">Thesis</Link></li>
              <li><Link href="/context">Context</Link></li>
              <li><Link href="/details">Details</Link></li>
              <li><Link href="/legacy">Legacy</Link></li>
              <li><Link href="/bibliography">Bibliography</Link></li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
        <footer className={styles.footer}>
          <p>APUSH History Fair Project · Revolution, Reaction, and Reform</p>
          <p className={styles.footerDetails}>
            Teacher: Mrs. Pierce · Year: 2026 · Group: Rohit Gaikoti, Maximillian Kolinski & Shankar Krishnamurthy
          </p>
        </footer>
      </body>
    </html>
  );
}
