import Header from "../../components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "個人情報の取り扱いについて - STREAM@S",
};

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <Header />
      <h1 className="font-black text-3xl my-2">個人情報の取り扱いについて</h1>
      <article className="my-2">
        <p>
          STREAM@Sでは、現時点では利用者のみなさまの個人を識別しうる情報を収集しておりません。ただし、STREAM@Sが利用しているサービスの一部がそれらの情報を収集することがございます。
        </p>
        <h2 className="font-bold text-2xl mt-4 mb-1">検索機能について</h2>
        <p>
          STREAM@Sの検索機能は、完全に利用者のWebブラウザ内部で処理されるため、入力された情報をSTREAM@Sが収集することはありません。
        </p>
        <h2 className="font-bold text-2xl mt-4 mb-1">
          Vercel社による個人情報の取り扱い
        </h2>
        <p>
          STREAM@Sは、米国カリフォルニア州のVercel社が提供するホスティングサービスに設置されています。Vercel社は、サーバーの運用に必要な最小限のログ(IPアドレス、アクセスされたページ、アクセスされた時間など)を記録することができます。Vercel社は、利用者の個人を識別しうる情報(氏名、住所、電話番号、電子メールアドレスなどがありますが、これに限りません)をいかなる形でも収集することはありません。
        </p>
        <h2 className="font-bold text-2xl mt-4 mb-1">
          アルバム個別ページ上の埋め込みプレイヤーについて
        </h2>
        <p>
          アルバム個別ページには、Spotify、Apple Music、Amazon
          Musicの楽曲埋め込みウィジェットが設置されており、これらのページにおいては各プラットフォームのプライバシーポリシーが適用されます。各プラットフォームは、アルバム個別ページ内での利用者の行動を追跡し、行動データをマーケティング、楽曲のおすすめ精度向上等の目的で利用する場合があります。くわしくは、各プラットフォームのプライバシーポリシーをご確認ください。
        </p>
        <ul>
          <li>
            <a
              href="https://www.spotify.com/jp/legal/privacy-policy/"
              className="underline hover:text-yellow-500 transition"
            >
              Spotify
            </a>
          </li>
          <li>
            <a
              href="https://www.apple.com/jp/legal/privacy/data/ja/apple-music-web/"
              className="underline hover:text-yellow-500 transition"
            >
              Apple Music Webプレイヤー
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.co.jp/gp/help/customer/display.html?ref_=hp_left_v4_sib&nodeId=GX7NJQ4ZB8MHFRNJ"
              className="underline hover:text-yellow-500 transition"
            >
              Amazon Music
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Privacy;
