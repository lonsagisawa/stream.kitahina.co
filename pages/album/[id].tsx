import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import Header from "../../components/header";
import Player from "../../components/player";

const API_ENDPOINT =
  process.env.API_ENDPOINT || "https://stream-api.kitahina.co";

export const getStaticPaths: GetStaticPaths = async () => {
  // https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
  const res = await fetch(`${API_ENDPOINT}/album`);
  const albums = await res.json();

  const paths = albums.data.map((data: { id: string }) => ({
    params: { id: data.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const res = await fetch(`${API_ENDPOINT}/album/${id}`);
  const album = await res.json();

  return {
    props: { album },
  };
};

const Album = ({ album }: any) => {
  const ogp = {
    url: "https://stream.kitahina.co/album/" + album.data.id,
    img: "https://stream.kitahina.co/api/og?title=" + album.data.name,
  };
  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <Head>
        <title>{`${album.data.name} - STREAM@S`}</title>
        <meta
          name="description"
          content="ストリーミングで楽しむアイドルマスターシリーズの音楽"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={ogp.url} />
        <meta property="og:title" content={album.data.name} />
        <meta property="og:image" content={ogp.img} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kitahinaCo" />
        <meta name="twitter:creator" content="@kitahinaCo" />
        <meta name="twitter:title" content={album.data.name} />
        <meta name="twitter:image" content={ogp.img} />
      </Head>
      <Header brand={album.data.brand} />
      <div>
        <h2 className="text-xl font-bold mb-2">{album.data.name}</h2>
        <Player
          spotify={album.data.spotify}
          applemusic={album.data.applemusic}
          amazon={album.data.amazon}
        />
      </div>
    </div>
  );
};

export default Album;
