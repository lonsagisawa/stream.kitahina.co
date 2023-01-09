interface AppleMusicProp {
  id?: string;
}

const AppleMusic = ({ id }: AppleMusicProp) => {
  return (
    <iframe
      allow="autoplay *; encrypted-media *;"
      width="100%"
      height="450"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={`https://embed.music.apple.com/jp/album/${id}`}
    ></iframe>
  );
};

export default AppleMusic;
