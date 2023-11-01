import Header from "../../components/header";
import Head from "next/head";
import List from "../../components/list";
import tailwindcssConfig from "../../tailwind.config";
import { Album, Albums } from "../../types/Album";
import { Metadata } from "next";

const API_ENDPOINT =
  process.env.API_ENDPOINT || "https://stream-api.kitahina.co";

export const metadata: Metadata = {
  title: "STREAM@S - Shiny Colors",
};

export const getData = async () => {
  const albums: Albums = {};
  await fetch(`${API_ENDPOINT}/album/shinycolors`)
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

          const name = album["name"].match(/^(.+?\s)([01]\d)(.*)/);
          if (name && name[3].length > 0) {
            album["name"] = name[2] + name[3];
          }

          if (!albums[series]) {
            albums[series] = [];
          }

          albums[series].push(album);
        });
      }
    });
  await fetch(`${API_ENDPOINT}/album/moiw2023`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.data;
    })
    .then((data) => {
      if (albums["OTHER"] && data) {
        albums["OTHER"].push(data);
      }
    });

  return albums;
};

const ShinyColors = async () => {
  const albums = await getData();

  return (
    <div
      className="container mx-auto px-4 max-w-2xl"
      style={{
        ["--color-brand" as any]:
          tailwindcssConfig.theme?.extend.colors.brand["shinycolors"].DEFAULT,
      }}
    >
      <Header brand="shinycolors" />
      <List albums={albums} />
    </div>
  );
};

export default ShinyColors;
