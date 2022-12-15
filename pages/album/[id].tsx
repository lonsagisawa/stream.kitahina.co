import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../../components/header";
import Spotify from "../../components/spotify";
import AppleMusic from "../../components/applemusic";
import Amazon from "../../components/amazon";

export async function getStaticPaths() {
  // https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
  const res = await fetch("https://stream-api.kitahina.co/album");
  const albums = await res.json();

  const paths = albums.data.map((data: { id: string }) => ({
    params: { id: data.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  const res = await fetch("https://stream-api.kitahina.co/album");
  const albums = await res.json();

  return {
    props: { albums },
  };
}

const Album = ({ albums }: any) => {
  const router = useRouter();
  const { id } = router.query;

  const getAlbum = (albumId: any) => {
    return albums.data.find(({ id }: any) => id === albumId);
  };

  const album = getAlbum(id);

  return (
    <div className="container mx-auto">
      <Header />
      <div>
        <h2 className="text-xl font-bold">{album.name}</h2>
        <Spotify id={album.spotify} />
        <AppleMusic id={album.applemusic} />
        <Amazon id={album.amazon} />
      </div>
    </div>
  );
};

export default Album;
