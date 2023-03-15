import * as React from "react";
import Header from "../components/header";
import Head from "next/head";
import Link from "next/link";
import tailwindcssConfig from "../tailwind.config";

const CinderellaGirls = () => {
  const SpotifyCG = () => {
    return (
      <iframe
        src="https://open.spotify.com/embed/playlist/6WTrT0UscJNq1W4koQ0szg?utm_source=generator"
        width="100%"
        height="720"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    );
  };

  const AppleMusicCG = () => {
    return (
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        width="100%"
        height="720"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/jp/playlist/%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC-%E3%82%B7%E3%83%B3%E3%83%87%E3%83%AC%E3%83%A9%E3%82%AC%E3%83%BC%E3%83%AB%E3%82%BA-%E5%85%A8%E6%9B%B2-the-idolm-ster-cinderella-girls/pl.c84b1f140c144797becff2b71076d4a1"
      ></iframe>
    );
  };

  const AmazonCG = () => {
    return (
      <iframe
        id="AmazonMusicEmbed0e7d248b88c34f2fb966647f8b762c9cjajp"
        src="https://music.amazon.co.jp/embed/0e7d248b88c34f2fb966647f8b762c9cjajp/?id=Qrz2p7JoC7&marketplaceId=A1VC38T7YXB528&musicTerritory=JP"
        width="100%"
        height="720px"
      ></iframe>
    );
  };

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
            <SpotifyCG />
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
            <AppleMusicCG />
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
            <AmazonCG />
          </>
        );
      }
    }
  }
  return (
    <div
      className="container mx-auto px-4 max-w-2xl"
      style={{
        "--color-brand":
          tailwindcssConfig.theme?.extend.colors.brand["cinderellagirls"]
            .DEFAULT,
      }}
    >
      <Head>
        <title>STREAM@S - Cinderella Girls</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header brand="cinderellagirls" />
      <p className="my-2">
        シンデレラガールズはアルバム単位での開放はなされていないため、日本コロムビアが供給する公式全曲プレイリストを掲載いたします。
      </p>
      <Player />
    </div>
  );
};

export default CinderellaGirls;
