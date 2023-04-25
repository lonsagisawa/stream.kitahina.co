import Header from "../../components/header";
import Head from "next/head";
import Link from "next/link";
import List from "../../components/list";
import tailwindcssConfig from "../../tailwind.config";
import { Album, Albums } from "../../types/Album";

const API_ENDPOINT =
  process.env.API_ENDPOINT || "https://stream-api.kitahina.co";

export const getStaticProps = async () => {
  const albums: Albums = {};
  await fetch(`${API_ENDPOINT}/album/cinderellagirls`)
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
          } else if (!album.series) {
            series = "OTHER";
          }

          if (!albums[series]) {
            albums[series] = [];
          }

          albums[series].push(album);
        });
      }
    });

  return {
    props: { albums },
  };
};

const U149 = ({ albums }: { albums: Albums }) => {
  const data: {
    [key: string]: Albums;
  } = {};
  Object.keys(albums).map((series) => {
    let kind = "";
    if (series.match(/^LIVE THE@TER/)) {
      kind = "LIVE THE@TER";
    } else if (series.match(/^MILLION THE@TER/)) {
      kind = "THE@TER DAYS";
    } else if (series.match(/^M@STER SPARKLE/)) {
      kind = "M@STER SPARKLE";
    } else if (series.match(/^THE@TER [ABC]/)) {
      kind = "THE@TER A/B/C";
    } else if (series.match(/^MILLION RADIO/)) {
      kind = "MILLION RADIO";
    } else {
      kind = "OTHER";
    }

    if (!data[kind]) {
      data[kind] = {};
    }

    data[kind][series] = albums[series];
  });

  return (
    <div
      className="container mx-auto px-4 max-w-2xl"
      style={{
        ["--color-brand" as any]:
          tailwindcssConfig.theme?.extend.colors.brand["cinderellagirls"]
            .DEFAULT,
      }}
    >
      <Head>
        <title>STREAM@S - U149</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header brand="cinderellagirls" />

      {Object.keys(data).map((kind, i) => (
        <List albums={data[kind]} key={i} />
      ))}
    </div>
  );
};

export default U149;
