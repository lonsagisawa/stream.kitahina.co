import Link from "next/link";
import { Twitter } from "react-bootstrap-icons";

interface TweetProp {
  title: string;
  url: string;
}

const Tweet = ({ title, url }: TweetProp) => {
  const tweetTitle = encodeURIComponent(title);
  return (
    <Link
      href={`https://twitter.com/intent/tweet?text=いま聴いているのはこれ！%20${tweetTitle}%20${url}`}
      className="bg-sky-400 text-white rounded-xl px-4 py-2 inline-block hover:bg-sky-300 shadow transition"
      target="_blank"
    >
      <Twitter size="24" className="inline" /> <span>シェアする</span>
    </Link>
  );
};

export default Tweet;
