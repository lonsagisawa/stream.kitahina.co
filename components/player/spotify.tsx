interface SpotifyProp {
  id?: string;
}

const Spotify = ({ id }: SpotifyProp) => {
  if (id == undefined) {
    return (
      <div className="rounded border border-slate-400 dark:border-slate-600 p-4">
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
