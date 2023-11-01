import Header from "../components/header";
import Link from "next/link";
import { Metadata } from "next";
import Search from "../components/search";

const API_ENDPOINT =
  process.env.API_ENDPOINT || "https://stream-api.kitahina.co";

const getData = async () => {
  const res = await fetch(`${API_ENDPOINT}/album`);
  const resJson = await res.json();
  const data = resJson.data;

  return data;
};

export const metadata: Metadata = {
  title: "STREAM@S",
};

const Page = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <Header />
      <p className="mb-4">
        サブスクリプションサービスで楽しむアイドルマスターの音楽
      </p>

      <Search data={data} />

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mb-4 pb-4 border-b border-slate-400 dark:border-slate-600">
        <Link href="/allstars">
          <div className="rounded-lg bg-brand-allstars text-white p-4 transition shadow hover:brightness-110 hover:shadow-brand-allstars-light hover:dark:shadow-brand-allstars-dark">
            <h2 className="font-bold text-xl">765PRO ALLSTARS</h2>
          </div>
        </Link>
        <Link href="/cinderellagirls">
          <div className="rounded-lg bg-brand-cinderellagirls text-white p-4 transition shadow hover:brightness-110 hover:shadow-brand-cinderellagirls-light hover:dark:shadow-brand-cinderellagirls-dark">
            <h2 className="font-bold text-xl">シンデレラガールズ</h2>
          </div>
        </Link>
        <Link href="/millionlive">
          <div className="rounded-lg bg-brand-millionlive text-white p-4 transition shadow hover:brightness-110 hover:shadow-brand-millionlive-light hover:dark:shadow-brand-millionlive-dark">
            <h2 className="font-bold text-xl">ミリオンライブ</h2>
          </div>
        </Link>
        <Link href="/sidem">
          <div className="rounded-lg bg-brand-sidem text-white p-4 transition shadow hover:brightness-110 hover:shadow-brand-sidem-light hover:dark:shadow-brand-sidem-dark">
            <h2 className="font-bold text-xl">SideM</h2>
          </div>
        </Link>
        <Link href="/shinycolors">
          <div className="rounded-lg bg-brand-shinycolors text-white p-4 transition shadow hover:brightness-110 hover:shadow-brand-shinycolors-light hover:dark:shadow-brand-shinycolors-dark">
            <h2 className="font-bold text-xl">シャイニーカラーズ</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
