import styles from "./common.module.css";

interface SpotifyProp {
  id?: string;
}

const Spotify = ({ id }: SpotifyProp) => {
  if (id == undefined) {
    return (
      <div className={styles.not_available}>
        <p>このプラットフォームは後日対応予定です。</p>
      </div>
    );
  } else {
    return (
      <iframe
        src={`https://open.spotify.com/embed/album/${id}`}
        width="100%"
        height="450"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    );
  }
};

export default Spotify;
