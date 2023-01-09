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
  spotifyEnabled: boolean;
  applemusicEnabled: boolean;
  amazonEnabled: boolean;
}

const Player = ({ spotify, applemusic, amazon }: PlayerProps) => {
  class Player extends React.Component<any, PlayerStateProps> {
    constructor(props: any) {
      super(props);
      this.state = {
        spotifyEnabled: true,
        applemusicEnabled: false,
        amazonEnabled: false,
      };
    }
    enableSpotify = () => {
      this.setState({
        spotifyEnabled: true,
        applemusicEnabled: false,
        amazonEnabled: false,
      });
    };
    enableAppleMusic = () => {
      this.setState({
        spotifyEnabled: false,
        applemusicEnabled: true,
        amazonEnabled: false,
      });
    };
    enableAmazon = () => {
      this.setState({
        spotifyEnabled: false,
        applemusicEnabled: false,
        amazonEnabled: true,
      });
    };
    render() {
      return (
        <>
          <div className="flex flex-col md:flex-row gap-2 my-2">
            {this.state.spotifyEnabled ? (
              <button
                className="rounded-xl py-2 px-4 cursor-pointer text-center dark:border-green-500 dark:hover:border-green-400 dark:border-2 bg-green-500 text-white hover:bg-green-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableSpotify}
              >
                Spotify
              </button>
            ) : (
              <button
                className="rounded-xl px-4 py-2 cursor-pointer text-center dark:border-green-500 dark:hover:border-green-400 dark:border-2 hover:bg-green-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableSpotify}
              >
                Spotify
              </button>
            )}
            {this.state.applemusicEnabled ? (
              <button
                className="rounded-xl px-4 py-2 cursor-pointer text-center dark:border-rose-500 dark:hover:border-rose-400 dark:border-2 bg-rose-500 text-white hover:bg-rose-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAppleMusic}
              >
                Apple Music
              </button>
            ) : (
              <button
                className="rounded-xl px-4 py-2 cursor-pointer text-center dark:border-rose-500 dark:hover:border-rose-400 dark:border-2 hover:bg-rose-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAppleMusic}
              >
                Apple Music
              </button>
            )}
            {this.state.amazonEnabled ? (
              <button
                className="rounded-xl px-4 py-2 cursor-pointer text-center dark:border-orange-500 dark:hover:border-orange-400 dark:border-2 bg-orange-500 text-white hover:bg-orange-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAmazon}
              >
                Amazon Music
              </button>
            ) : (
              <button
                className="rounded-xl px-4 py-2 cursor-pointer text-center dark:border-orange-500 dark:hover:border-orange-400 dark:border-2 hover:bg-orange-400 hover:text-white shadow dark:shadow-none transition"
                onClick={this.enableAmazon}
              >
                Amazon Music
              </button>
            )}
          </div>
          {this.state.spotifyEnabled ? <Spotify id={spotify} /> : null}
          {this.state.applemusicEnabled ? <AppleMusic id={applemusic} /> : null}
          {this.state.amazonEnabled ? <Amazon id={amazon} /> : null}
        </>
      );
    }
  }

  return <Player />;
};

export default Player;
