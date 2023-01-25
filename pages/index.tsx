import { useState } from "react";
import Header from "../components/header";
import Head from "next/head";
import Link from "next/link";
import Fuse from "fuse.js";

export const getStaticProps = async () => {
  const res = await fetch("https://stream-api.kitahina.co/album");
  const resJson = await res.json();
  const data = resJson.data;

  return {
    props: { data },
  };
};

const Home = ({ data }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);

  const searchIndex = new Fuse(data, {
    includeScore: true,
    findAllMatches: true,
    threshold: 0.4,
    ignoreLocation: true,
    keys: ["name"],
  });

  const handleSearch = (searchQuery: string) => {
    setSearchQuery(searchQuery);
    const results = searchIndex.search(searchQuery);
    setSearchResults(results);
  };

  return (
    <>
      <Head>
        <title>STREAM@S</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4 max-w-2xl">
        <Header />
        <p className="my-4">
          サブスクリプションサービスで楽しむアイドルマスターの音楽
        </p>
        <form className="mb-4">
          <div className="w-full rounded-full shadow bg-slate-50 dark:bg-slate-700">
            <input
              type="search"
              id="query"
              placeholder="検索"
              className="w-full py-3 px-6 rounded-full bg-transparent"
              value={searchQuery}
              onChange={(event) => handleSearch(event.target.value)}
            />
          </div>
        </form>
        {searchResults.length > 0 && (
          <>
            <p className="mb-2">検索結果</p>
            <ul className="mb-4">
              {searchResults.map(({ item }: any) => {
                return (
                  <Link href={`/album/${item.id}`} key={item.id}>
                    <li
                      key={item.id}
                      className="p-4 mb-2 border rounded border-slate-200 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                    >
                      {item.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </>
        )}
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mb-4 pb-4 border-b border-slate-400 dark:border-slate-600">
          <Link href="/allstars">
            <div className="rounded-lg bg-rose-500 text-white p-4 transition shadow hover:bg-rose-400 hover:shadow-rose-200 hover:dark:shadow-rose-800">
              <h2 className="font-bold text-xl">765PRO ALLSTARS</h2>
            </div>
          </Link>
          <Link href="/cinderellagirls">
            <div className="rounded-lg bg-blue-500 text-white p-4 transition-all shadow hover:bg-blue-400 hover:shadow-blue-200 hover:dark:shadow-blue-800">
              <h2 className="font-bold text-xl">シンデレラガールズ</h2>
            </div>
          </Link>
          <Link href="/millionlive">
            <div className="rounded-lg bg-yellow-500 text-white p-4 transition shadow hover:bg-yellow-400 hover:shadow-yellow-200 hover:dark:shadow-yellow-800">
              <h2 className="font-bold text-xl">ミリオンライブ</h2>
            </div>
          </Link>
          <Link href="/shinycolors">
            <div className="rounded-lg bg-sky-500 text-white p-4 transition shadow hover:bg-sky-400 hover:shadow-sky-200 hover:dark:shadow-sky-800">
              <h2 className="font-bold text-xl">シャイニーカラーズ</h2>
            </div>
          </Link>
        </div>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <div className="rounded-lg bg-emerald-500 text-white p-4 transition shadow hover:bg-emerald-400 hover:shadow-emerald-200 hover:dark:shadow-emerald-800">
            <h2 className="font-bold text-xl">SideM</h2>
            <p className="text-sm">2023年対応予定</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
