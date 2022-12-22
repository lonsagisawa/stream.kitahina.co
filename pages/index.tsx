import Header from "../components/header";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>STREAM@S</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <Header />
        <p className="my-2">
          サブスクリプションサービスで楽しむアイドルマスターの音楽
        </p>
        <h2 className="text-xl font-bold">既知の問題</h2>
        <ul className="list-disc list-inside my-2">
          <li>FirefoxでPrime Musicの埋め込みが表示されません</li>
        </ul>
        <ul className="text-2xl font-bold">
          <li>
            765PRO ALLSTARS
            <span className="text-gray-300 text-lg"> - 現在対応中です</span>
          </li>
          <li>
            <Link href="/cinderellagirls" className="underline">
              シンデレラガールズ
            </Link>
          </li>
          <li>
            <Link href="/millionlive" className="underline">
              ミリオンライブ
            </Link>
            <span className="text-gray-300 text-lg"> - 現在対応中です</span>
          </li>
          <li>
            SideM
            <span className="text-gray-300 text-lg">
              - 対応を検討しています
            </span>
          </li>
          <li>
            <Link href="/shinycolors" className="underline">
              シャイニーカラーズ
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
