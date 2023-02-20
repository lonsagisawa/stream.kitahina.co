import * as React from "react";
import Spotify from "./player/spotify";
import AppleMusic from "./player/applemusic";
import Amazon from "./player/amazon";
import styles from "./player.module.scss";

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
      if (spotify == undefined) {
        this.state = {
          spotifyEnabled: false,
          applemusicEnabled: true,
          amazonEnabled: false,
        };
      } else {
        this.state = {
          spotifyEnabled: true,
          applemusicEnabled: false,
          amazonEnabled: false,
        };
      }
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
          <div className={styles.button_container}>
            {this.state.spotifyEnabled ? (
              /* Tab / Spotify, Enabled */
              <button
                className={styles.button_spotify_enabled}
                onClick={this.enableSpotify}
              >
                Spotify
              </button>
            ) : (
              /* Tab / Spotify, Disabled */
              <button
                className={styles.button_spotify_disabled}
                onClick={this.enableSpotify}
              >
                Spotify
              </button>
            )}
            {this.state.applemusicEnabled ? (
              /* Tab / Apple Music, Enabled */
              <button
                className={styles.button_applemusic_enabled}
                onClick={this.enableAppleMusic}
              >
                Apple Music
              </button>
            ) : (
              /* Tab / Apple Music, Disabled */
              <button
                className={styles.button_applemusic_disabled}
                onClick={this.enableAppleMusic}
              >
                Apple Music
              </button>
            )}
            {this.state.amazonEnabled ? (
              /* Tab / Amazon Music, Enabled */
              <button
                className={styles.button_amazon_enabled}
                onClick={this.enableAmazon}
              >
                Amazon Music
              </button>
            ) : (
              /* Tab / Amazon Music, Disabled */
              <button
                className={styles.button_amazon_disabled}
                onClick={this.enableAmazon}
              >
                Amazon Music
              </button>
            )}
          </div>
          {this.state.spotifyEnabled ? <Spotify id={spotify} /> : undefined}
          {this.state.applemusicEnabled ? (
            <AppleMusic id={applemusic} />
          ) : undefined}
          {this.state.amazonEnabled ? <Amazon id={amazon} /> : undefined}
        </>
      );
    }
  }

  return <Player />;
};

export default Player;
