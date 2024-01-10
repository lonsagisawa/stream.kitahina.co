"use client";

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
    <div className="flex flex-row gap-2">
      <button
        onClick={shareEvent}
        className="px-4 py-2 rounded-xl bg-slate-500 hover:bg-slate-400 text-white shadow dark:shadow-none transition"
      >
        <ShareFill className="inline-block mr-1" />
        シェア
      </button>
      <a
        href={`https://misskeyshare.link/share.html?text=${data.text}&url=${data.url}`}
        className="px-4 py-2 rounded-xl bg-lime-500 hover:bg-lime-400 text-white shadow darl:shadow-none transition"
      >
        <ShareFill className="inline-block mr-1" />
        Misskeyでシェア
      </a>
    </div>
  );
};

export default Share;
