import * as React from "react";
import { ShareFill } from "react-bootstrap-icons";

const Share = ({ url, title }: any) => {
  const data = {
    text: `オススメはこのアルバム！ - ${title}`,
    url: url,
  };

  const shareEvent = async () => {
    try {
      await navigator.share(data);
    } catch (err) {
      alert(
        "シェア機能はこの環境には対応しておりません。お手数ですが、URLのコピーをご利用ください。"
      );
    }
  };

  return (
    <button onClick={shareEvent} className="px-4 py-2 rounded-xl bg-slate-500">
      <ShareFill className="inline-block mr-1" />
      シェアする
    </button>
  );
};

export default Share;
