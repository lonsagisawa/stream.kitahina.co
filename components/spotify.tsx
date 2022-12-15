interface SpotifyProp {
  id?: string;
}

const Spotify = ({ id }: SpotifyProp) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/album/${id}`}
      width="100%"
      height="450"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default Spotify;
