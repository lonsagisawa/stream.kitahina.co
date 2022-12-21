import * as React from "react";
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

  class Player extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        enabled: "spotify",
      };
    }
    enableSpotify = () => {
      this.setState({ enabled: "spotify" });
    };
    enableAppleMusic = () => {
      this.setState({ enabled: "applemusic" });
    };
    enableAmazon = () => {
      this.setState({ enabled: "amazon" });
    };
    render() {
      if (this.state.enabled == "spotify") {
        return (
          <>
            <div className="flex flex-row my-2">
              <div
                className="border-b-2 border-green-500 p-2 cursor-pointer"
                onClick={this.enableSpotify}
              >
                Spotify
              </div>
              <div
                className="p-2 cursor-pointer"
                onClick={this.enableAppleMusic}
              >
                Apple Music
              </div>
              <div className="p-2 cursor-pointer" onClick={this.enableAmazon}>
                Prime Music
              </div>
            </div>
            <Spotify id={album.spotify} />
          </>
        );
      } else if (this.state.enabled == "applemusic") {
        return (
          <>
            <div className="flex flex-row my-2">
              <div className="p-2 cursor-pointer" onClick={this.enableSpotify}>
                Spotify
              </div>
              <div
                className="border-b-2 border-rose-500 p-2 cursor-pointer"
                onClick={this.enableAppleMusic}
              >
                Apple Music
              </div>
              <div className="p-2 cursor-pointer" onClick={this.enableAmazon}>
                Prime Music
              </div>
            </div>
            <AppleMusic id={album.applemusic} />
          </>
        );
      } else if (this.state.enabled == "amazon") {
        return (
          <>
            <div className="flex flex-row my-2">
              <div className="p-2 cursor-pointer" onClick={this.enableSpotify}>
                Spotify
              </div>
              <div
                className="p-2 cursor-pointer"
                onClick={this.enableAppleMusic}
              >
                Apple Music
              </div>
              <div
                className="border-b-2 border-orange-500 p-2 cursor-pointer"
                onClick={this.enableAmazon}
              >
                Prime Music
              </div>
            </div>
            <Amazon id={album.amazon} />
          </>
        );
      }
    }
  }

  return (
    <div className="container mx-auto">
      <Header />
      <div>
        <h2 className="text-xl font-bold">{album.name}</h2>
        <Player />
      </div>
    </div>
  );
};

export default Album;
