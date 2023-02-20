import styles from "./common.module.css";

interface AppleMusicProp {
  id?: string;
}

const AppleMusic = ({ id }: AppleMusicProp) => {
  if (id == undefined) {
    return (
      <div className={styles.not_available}>
        <p>このプラットフォームは後日対応予定です。</p>
      </div>
    );
  } else {
    return (
      <iframe
        allow="autoplay *; encrypted-media *;"
        width="100%"
        height="450"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={`https://embed.music.apple.com/jp/album/${id}`}
      ></iframe>
    );
  }
};

export default AppleMusic;
