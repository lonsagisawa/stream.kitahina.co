import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container px-4 py-4 mx-auto mt-4 max-w-2xl text-sm text-slate-400 dark:text-slate-600 border-t border-slate-400 dark:border-slate-600">
      <div>
        <div className="flex flex-col lg:flex-row my-2 gap-2 lg:gap-4">
          <Link
            href="/about"
            className="underline hover:text-amber-400 transition"
          >
            STREAM@Sとは？
          </Link>
          <Link
            href="/privacy"
            className="underline hover:text-amber-400 transition"
          >
            プライバシーポリシー
          </Link>
        </div>
        こちらは有志により作成されたファンサイトです
        <br />
        このWebサイトについてランティス様/日本コロムビア様/その他関係各所へのお問い合わせはご遠慮ください
        <br />
        <a href="https://kitahina.co" className="underline font-bold">
          ← kitahina.co
        </a>
      </div>
    </footer>
  );
};

export default Footer;
