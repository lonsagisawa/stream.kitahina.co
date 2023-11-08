import Header from "../../components/header";
import List from "../../components/list";
import tailwindcssConfig from "../../tailwind.config";
import { Album, Albums } from "../../types/Album";
import { Metadata } from "next";

const API_ENDPOINT =
  process.env.API_ENDPOINT || "https://stream-api.kitahina.co";

const getData = async () => {
  const albums: Albums = {};
  await fetch(`${API_ENDPOINT}/album/millionlive`)
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

  return albums;
};

export const metadata: Metadata = {
  title: "STREAM@S - Million Live!",
};

const MillionLive = async () => {
  const albums = await getData();

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
    } else if (series.match(/^THE IDOLM@STER MILLION LIVE! ベストアルバム/)) {
      kind = "THE IDOLM@STER MILLION LIVE! ベストアルバム";
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
          tailwindcssConfig.theme?.extend.colors.brand["millionlive"].DEFAULT,
      }}
    >
      <Header brand="millionlive" />

      {Object.keys(data).map((kind, i) => (
        <section key={i} className="mt-10">
          <h2
            className={`text-xl font-light ${kind === "OTHER" && "sr-only"}`}
            aria-hidden={kind !== "OTHER"}
          >
            {kind}
          </h2>
          <List albums={data[kind]} />
        </section>
      ))}
    </div>
  );
};

export default MillionLive;
