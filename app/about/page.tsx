import Header from "../../components/header";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "STREAM@S",
};

const About = () => {
  return (
    <>
      <div className="container mx-auto px-4 max-w-2xl">
        <Header />
        <h2 className="text-2xl font-bold">STREAM@Sとは？</h2>
        <p className="my-2">
          2022年11月より順次、アイドルマスターシリーズの楽曲がストリーミングサービスで聴けるようになりました。このWebアプリケーションは、アイドルマスターシリーズ各種タイトルの楽曲を主要3プラットフォーム(Spotify,
          Apple,
          Amazon)上で見つけやすく・シェアしやすくすることで、皆様のプロデュース活動をより円滑にすることを目指しています。
        </p>
        <h2 className="text-2xl font-bold">既知の問題、仕様</h2>
        <ul>
          <li className="list-disc list-inside my-2">
            Firefoxで強化型トラッキング保護を厳格モードに設定していると、Amazon
            Musicの埋め込みが表示されません。
          </li>
          <li className="list-disc list-inside my-2">
            デスクトップのFirefoxでは、シェアボタンが機能しません(モバイルでは問題なく機能します)。
          </li>
        </ul>
        <h2 className="text-2xl font-bold">誰が運営しているの？</h2>
        <p className="my-2">
          <Link
            href="https://lon.sagisawa.me"
            target="_blank"
            className="underline"
          >
            鷺沢ろん
          </Link>
          が設置、運営しております。
        </p>
        <h2 className="text-2xl font-bold">ソースコードはある？貢献できる？</h2>
        <p className="my-2">
          フロントエンド、APIともにGitHubに設置しております。プルリクエスト、およびIssueによる貢献を歓迎しております。
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/lonsagisawa/stream.kitahina.co"
              className="underline"
            >
              https://github.com/lonsagisawa/stream.kitahina.co
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lonsagisawa/stream-api.kitahina.co"
              className="underline"
            >
              https://github.com/lonsagisawa/stream-api.kitahina.co
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
