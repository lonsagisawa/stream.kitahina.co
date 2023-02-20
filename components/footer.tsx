import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <nav className={styles.footer_nav}>
          <Link href="/about">STREAM@Sとは？</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
          <Link href="https://twitter.com/kitahinaCo">Twitter</Link>
        </nav>
        こちらは有志により作成されたファンサイトです
        <br />
        このWebサイトについてランティス様/日本コロムビア様/その他関係各所へのお問い合わせはご遠慮ください
        <br />
        <a href="https://kitahina.co">← kitahina.co</a>
      </p>
    </footer>
  );
};

export default Footer;
