interface AmazonProps {
  id?: string;
}

const Amazon = ({ id }: AmazonProps) => {
  return (
    <iframe
      id="AmazonMusicEmbedB09BJMXXNV"
      src={`https://music.amazon.co.jp/embed/${id}`}
      width="100%"
      height="450"
    ></iframe>
  );
};

export default Amazon;
