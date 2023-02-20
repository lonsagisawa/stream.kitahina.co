import * as React from "react";
import { ShareFill } from "react-bootstrap-icons";
import styles from "./share.module.css";

const Share = ({ url, title }: any) => {
  const data = {
    text: `オススメはこのアルバム！ - ${title}`,
    url: url,
  };

  const shareEvent = async () => {
    try {
      await navigator.share(data);
    } catch (err) {
      alert("シェアがキャンセルされたか、シェアに対応していない環境です。");
    }
  };

  return (
    <>
      <button onClick={shareEvent} className={styles.share_button}>
        <ShareFill className={styles.share_icon} />
        シェア
      </button>
    </>
  );
};

export default Share;
