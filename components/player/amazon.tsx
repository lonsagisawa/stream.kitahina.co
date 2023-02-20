import styles from "./common.module.css";

interface AmazonProps {
  id?: string;
}

const Amazon = ({ id }: AmazonProps) => {
  if (id == undefined) {
    return (
      <div className={styles.not_available}>
        <p>このプラットフォームは後日対応予定です。</p>
      </div>
    );
  } else {
    return (
      <iframe
        id="AmazonMusicEmbed"
        src={`https://music.amazon.co.jp/embed/${id}`}
        width="100%"
        height="450"
      ></iframe>
    );
  }
};

export default Amazon;
