import Header from "../../../components/header";
import Player from "../../../components/player";
import Share from "../../../components/share";
import { Album } from "../../../types/Album";

const API_ENDPOINT =
  process.env.API_ENDPOINT || "https://stream-api.kitahina.co";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const res = await fetch(`${API_ENDPOINT}/album`);
  const albums = await res.json();

  return albums.data.map((data: { id: string }) => ({
    id: data.id,
  }));
};

export const generateMetadata = async ({ params }) => {
  const res = await fetch(`${API_ENDPOINT}/album/${params.id}`);
  const data = await res.json();
  const album: Album = data.data;

  const ogp = {
    url: "https://stream.kitahina.co/album/" + album.id,
    img: "https://stream.kitahina.co/api/og?title=" + album.name,
  };

  return {
    title: album.name + "- STREAM@S",
    description: "ストリーミングサービスで楽しむアイドルマスターシリーズの音楽",
    openGraph: {
      title: album.name,
      images: [
        {
          url: ogp.url,
          width: 1200,
          height: 630,
        },
      ],
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@kitahinaCo",
      creator: "@kitahinaCo",
      title: album.name,
      images: [ogp.img],
    },
    alternates: {
      canonical: ogp.url,
    },
  };
};

const AlbumPage = async ({ params }) => {
  const res = await fetch(`${API_ENDPOINT}/album/${params.id}`);
  const data = await res.json();
  const album: Album = data.data;
  const url = "https://stream.kitahina.co/album/" + album.id;

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <Header brand={album.brand} />
      <div>
        <h2 className="text-2xl lg:text-4xl font-black lg:font-light mb-2">
          {album.name}
        </h2>
        <Share url={url} title={album.name} />
        <Player
          spotify={album.platform.spotify}
          applemusic={album.platform.applemusic}
          amazon={album.platform.amazon}
        />
      </div>
    </div>
  );
};

export default AlbumPage;
