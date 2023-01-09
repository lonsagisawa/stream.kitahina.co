import * as React from "react";
import Spotify from "./player/spotify";
import AppleMusic from "./player/applemusic";
import Amazon from "./player/amazon";

interface PlayerProps {
  spotify?: string;
  applemusic?: string;
  amazon?: string;
}

interface PlayerStateProps {
  enabled: string;
}

const Player = ({ spotify, applemusic, amazon }: PlayerProps) => {
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
            <Spotify id={spotify} />
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
            <AppleMusic id={applemusic} />
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
            <Amazon id={amazon} />
          </>
        );
      }
    }
  }

  return <Player />;
};

export default Player;
