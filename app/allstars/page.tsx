import Header from "../../components/header";
import Link from "next/link";
import { Metadata } from "next";
import List from "../../components/list";
import tailwindcssConfig from "../../tailwind.config";
import { Album, Albums } from "../../types/Album";

const API_ENDPOINT =
  process.env.API_ENDPOINT || "https://stream-api.kitahina.co";

const getData = async () => {
  const albums: Albums = {};
  await fetch(`${API_ENDPOINT}/album/allstars`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.data;
    })
    .then((data) => {
      if (data) {
        let series = "";
        data.forEach((album: Album) => {
          if (album.series && series !== album.series) {
            series = album.series;
          }

          if (!albums[series]) {
            albums[series] = [];
          }

          albums[series].push(album);
        });
      }
    });
  await fetch(`${API_ENDPOINT}/album/fivestars`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.data;
    })
    .then((data) => {
      if (data) {
        albums["M@STERS OF IDOL WORLD!!"] = data;
      }
    });

  return albums;
};

export const metadata: Metadata = {
  title: "STREAM@S - 765PRO ALLSTARS",
};

const AllStars = async () => {
  const albums = await getData();

  return (
    <div
      className="container mx-auto px-4 max-w-2xl"
      style={{
        ["--color-brand" as any]:
          tailwindcssConfig.theme?.extend.colors.brand["allstars"].DEFAULT,
      }}
    >
      <Header brand="allstars" />
      <p className="mb-4">
        「ぷちます！」シリーズの楽曲がすでに配信されていますが(
        <Link href="http://www.fwinc.co.jp/news/79341/" className="underline">
          http://www.fwinc.co.jp/news/79341/
        </Link>
        )、掲載は後日を予定しております。
      </p>
      <List albums={albums} />
    </div>
  );
};

export default AllStars;
