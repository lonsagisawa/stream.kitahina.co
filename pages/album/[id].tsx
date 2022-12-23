import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
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

  interface PlayerStateProps {
    enabled: string;
  }

  class Player extends React.Component<any, PlayerStateProps> {
    constructor(props: any) {
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
            <div className="flex flex-row gap-2 my-2">
              <div
                className="rounded-xl py-2 px-4 cursor-pointer dark:border-green-500 dark:hover:border-green-400 dark:border-2 bg-green-500 text-white hover:bg-green-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableSpotify}
              >
                Spotify
              </div>
              <div
                className="rounded-xl px-4 py-2 cursor-pointer dark:border-rose-500 dark:hover:border-rose-400 dark:border-2 hover:bg-rose-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAppleMusic}
              >
                Apple Music
              </div>
              <div
                className="rounded-xl px-4 py-2 cursor-pointer dark:border-orange-500 dark:hover:border-orange-400 dark:border-2 hover:bg-orange-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAmazon}
              >
                Prime Music
              </div>
            </div>
            <Spotify id={album.spotify} />
          </>
        );
      } else if (this.state.enabled == "applemusic") {
        return (
          <>
            <div className="flex flex-row gap-2 my-2">
              <div
                className="rounded-xl px-4 py-2 cursor-pointer dark:border-green-500 dark:hover:border-green-400 dark:border-2 hover:bg-green-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableSpotify}
              >
                Spotify
              </div>
              <div
                className="rounded-xl px-4 py-2 cursor-pointer dark:border-rose-500 dark:hover:border-rose-400 dark:border-2 bg-rose-500 text-white hover:bg-rose-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAppleMusic}
              >
                Apple Music
              </div>
              <div
                className="rounded-xl px-4 py-2 cursor-pointer dark:border-orange-500 dark:hover:border-orange-400 dark:border-2 hover:bg-orange-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAmazon}
              >
                Prime Music
              </div>
            </div>
            <AppleMusic id={album.applemusic} />
          </>
        );
      } else if (this.state.enabled == "amazon") {
        return (
          <>
            <div className="flex flex-row gap-2 my-2">
              <div
                className="rounded-xl px-4 py-2 cursor-pointer dark:border-green-500 dark:hover:border-green-400 dark:border-2 hover:bg-green-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableSpotify}
              >
                Spotify
              </div>
              <div
                className="rounded-xl px-4 py-2 cursor-pointer dark:border-rose-500 dark:hover:border-rose-400 dark:border-2 hover:bg-rose-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAppleMusic}
              >
                Apple Music
              </div>
              <div
                className="rounded-xl px-4 py-2 cursor-pointer dark:border-orange-500 dark:hover:border-orange-400 dark:border-2 bg-orange-500 text-white hover:bg-orange-400 hover:text-white shadow dark:shadow-none transition"
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
    <div className="container mx-auto px-4 max-w-2xl">
      <Head>
        <title>{album.name} - STREAM@S</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header brand={album.series} />
      <div>
        <h2 className="text-xl font-bold">{album.name}</h2>
        <Player />
      </div>
    </div>
  );
};

export default Album;
