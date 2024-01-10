import Header from "../../../components/header";
import Player from "../../../components/player";
import Share from "../../../components/share";
import { Album } from "../../../types/Album";

const API_ENDPOINT =
  process.env.API_ENDPOINT || "https://stream-api.kitahina.co";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  // TODO: Proper cache strategy
  const res = await fetch(`${API_ENDPOINT}/album`, { cache: "no-store" });
  const albums = await res.json();

  return albums.data.map((data: { id: string }) => ({
    id: data.id,
  }));
};

type pageParams = {
  params: {
    id: string;
  };
};

const fetchAlbum = async (id: string) => {
  const res = await fetch(`${API_ENDPOINT}/album/${id}`);
  const data = await res.json();
  const album: Album = data.data;

  return album;
};

export const generateMetadata = async ({ params }: pageParams) => {
  const album = await fetchAlbum(params.id);

  const ogp = {
    url: "https://stream.kitahina.co/album/" + album.id,
    img: "https://stream.kitahina.co/api/og?title=" + album.name,
  };

  return {
    metadataBase: new URL("https://stream.kitahina.co"),
    title: album.name + "- STREAM@S",
    description: "ストリーミングサービスで楽しむアイドルマスターシリーズの音楽",
    openGraph: {
      title: album.name,
      images: [
        {
          url: ogp.img,
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

const AlbumPage = async ({ params }: pageParams) => {
  const album = await fetchAlbum(params.id);
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
