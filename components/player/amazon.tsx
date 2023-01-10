interface AmazonProps {
  id?: string;
}

const Amazon = ({ id }: AmazonProps) => {
  if (id == undefined) {
    return (
      <div className="rounded border border-slate-400 dark:border-slate-600 p-4">
        <p>このプラットフォームは後日対応予定です。</p>
      </div>
    );
  } else {
    return (
      <iframe
        id="AmazonMusicEmbedB09BJMXXNV"
        src={`https://music.amazon.co.jp/embed/${id}`}
        width="100%"
        height="450"
      ></iframe>
    );
  }
};

export default Amazon;
