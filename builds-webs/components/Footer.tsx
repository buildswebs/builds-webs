import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div>
          <Link href="/" className={styles.brand} aria-label="BuildsWebs Home">
            <Image
              src="/logo.png"
              alt="BuildsWebs"
              width={151}
              height={50}
              className={styles.brandImg}
            />
          </Link>
          <p className={styles.address}>
            Greater Noida, Uttar Pradesh, India
            <br />
            &copy; {new Date().getFullYear()} BuildsWebs
          </p>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          <Link href="/about">About us</Link>
          <Link href="/happy-clients">Happy clients</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms and conditions</Link>
        </nav>
      </div>
    </footer>
  );
}
