import "../styles/globals.css";
import "@fontsource-variable/inter";
import "../styles/lineseed/100.css";
import "../styles/lineseed/300.css";
import "../styles/lineseed/700.css";
import "../styles/lineseed/900.css";
import Footer from "../components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "STREAM@S",
  description: "音楽ストリーミングでひろがるアイドルマスターの世界",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="bg-yellow-50 p-3 text-center">
          <p className="text-yellow-800 font-bold">
            STREAM@Sは、2024年12月31日をもって提供を終了いたします。
          </p>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
