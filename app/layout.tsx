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

// TODO: Proper cache strategy
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
