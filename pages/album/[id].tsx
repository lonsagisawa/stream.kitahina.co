import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import Header from "../../components/header";
import Spotify from "../../components/spotify";
import AppleMusic from "../../components/applemusic";
import Amazon from "../../components/amazon";
import Tweet from "../../components/tweet";

export const getStaticPaths: GetStaticPaths = async () => {
  // https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
  const res = await fetch("https://stream-api.kitahina.co/album");
  const albums = await res.json();

  const paths = albums.data.map((data: { id: string }) => ({
    params: { id: data.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const res = await fetch(`https://stream-api.kitahina.co/album/${id}`);
  const album = await res.json();

  return {
    props: { album },
  };
};

const Album = ({ album }: any) => {
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
            <div className="flex flex-col md:flex-row gap-2 my-2">
              <div
                className="rounded-xl py-2 px-4 cursor-pointer text-center dark:border-green-500 dark:hover:border-green-400 dark:border-2 bg-green-500 text-white hover:bg-green-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableSpotify}
              >
                Spotify
              </div>
              <div
                className="rounded-xl px-4 py-2 cursor-pointer text-center dark:border-rose-500 dark:hover:border-rose-400 dark:border-2 hover:bg-rose-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAppleMusic}
              >
                Apple Music
              </div>
              <div
                className="rounded-xl px-4 py-2 cursor-pointer text-center dark:border-orange-500 dark:hover:border-orange-400 dark:border-2 hover:bg-orange-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAmazon}
              >
                Amazon Music
              </div>
            </div>
            <Spotify id={album.data.spotify} />
          </>
        );
      } else if (this.state.enabled == "applemusic") {
        return (
          <>
            <div className="flex flex-col md:flex-row gap-2 my-2">
              <div
                className="rounded-xl px-4 py-2 cursor-pointer text-center dark:border-green-500 dark:hover:border-green-400 dark:border-2 hover:bg-green-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableSpotify}
              >
                Spotify
              </div>
              <div
                className="rounded-xl px-4 py-2 cursor-pointer text-center dark:border-rose-500 dark:hover:border-rose-400 dark:border-2 bg-rose-500 text-white hover:bg-rose-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAppleMusic}
              >
                Apple Music
              </div>
              <div
                className="rounded-xl px-4 py-2 cursor-pointer text-center dark:border-orange-500 dark:hover:border-orange-400 dark:border-2 hover:bg-orange-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAmazon}
              >
                Amazon Music
              </div>
            </div>
            <AppleMusic id={album.data.applemusic} />
          </>
        );
      } else if (this.state.enabled == "amazon") {
        return (
          <>
            <div className="flex flex-col md:flex-row gap-2 my-2">
              <div
                className="rounded-xl px-4 py-2 cursor-pointer text-center dark:border-green-500 dark:hover:border-green-400 dark:border-2 hover:bg-green-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableSpotify}
              >
                Spotify
              </div>
              <div
                className="rounded-xl px-4 py-2 cursor-pointer text-center dark:border-rose-500 dark:hover:border-rose-400 dark:border-2 hover:bg-rose-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAppleMusic}
              >
                Apple Music
              </div>
              <div
                className="rounded-xl px-4 py-2 cursor-pointer text-center dark:border-orange-500 dark:hover:border-orange-400 dark:border-2 bg-orange-500 text-white hover:bg-orange-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAmazon}
              >
                Amazon Music
              </div>
            </div>
            <Amazon id={album.data.amazon} />
          </>
        );
      }
    }
  }

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <Head>
        <title>{`${album.data.name} - STREAM@S`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header brand={album.data.series} />
      <div>
        <h2 className="text-xl font-bold mb-2">{album.data.name}</h2>
        <Tweet
          url={`https://stream.kitahina.co/album/${album.data.id}`}
          title={album.data.name}
        />
        <Player />
      </div>
    </div>
  );
};

export default Album;
