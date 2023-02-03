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
      alert("シェアがキャンセルされたか、シェアに対応していない環境です。");
    }
  };

  return (
    <>
      <button
        onClick={shareEvent}
        className="px-4 py-2 rounded-xl bg-slate-500 hover:bg-slate-400 text-white shadow dark:shadow-none transition"
      >
        <ShareFill className="inline-block mr-1" />
        シェア
      </button>
    </>
  );
};

export default Share;
