/*
  データ構造について
  Album = {
    id: そのアルバムがCDとして発売された際の型番(存在しない場合は適切な名称)
    name: そのアルバムの名称
    brand: そのアルバムが属するブランド
      allstars - 765PRO ALLSTARS, ぷちます！
      cinderellagirls - シンデレラガールズ
      millionlive - ミリオンライブ！
      sidem - SideM
      shinycolors - シャイニーカラーズ
      fivestars - FIVE STARS(MoIW関連の楽曲など、5ブランド合同名義のアルバム)
    series: そのアルバムが属するシリーズ
      例: LIVE THE@TER PERFORMANCE, P@NORAMA WING
      そのアルバムが特定のシリーズに沿ってリリースされたものでない場合、
      省略する(例: 君との明日を願うから、アイ MUST GO!)
    cover: カバーアートのURL
    platform: 各種プラットフォームにおけるアルバムID
      spotify: Spotify
        https://open.spotify.com/album/{この部分がID}
      applemusic: Apple Music
        https://music.apple.com/jp/album/{アルバムの名称などが入る}/{この部分がID}
      amazon: Amazon Music
        https://music.amazon.co.jp/albums/{この部分がID}
    songs: そのアルバムに含まれる楽曲を、文字列の配列で表記
      ・各配信プラットフォーム上での表記によらず、正式な楽曲名を記載する
      例: THE IDOLM@STER MILLION LIVE! M@STER SPARKLE 01 の場合
      ["ローリング△さんかく", "地球儀にない国", "祈りの羽根", "瑠璃色金魚と花菖蒲", "未来系ドリーマー"]
      (「ローリング△さんかく」の「△」は各種プラットフォーム上での表記では省略されているが、省略せずに記載する)
      ・同一楽曲の別バージョンは含まない(オフボーカルも含む)
      例: THE IDOLM@STER SHINY COLORS Synthe-Side 01 の場合
      ["Killer×Mission"]
      (このアルバムには「Killer×Mission」のソロバージョンも収録されているが、記載しない)
      ・CDに収録されていても各種配信プラットフォームにおいて配信されていない楽曲は、記載しない
      例: THE IDOLM@STER SHINY COLORS PANOR@MA WING 02 の場合
      ["FELICE", "イルミネイトコンサート"]
      (このアルバムは物理版には「虹の行方」が収録されているが、配信には乗っていないため記載しない)
  }
*/

export type Album = {
  id: string;
  name: string;
  brand: string;
  series?: string;
  cover: string;
  platform: {
    spotify?: string;
    applemusic?: string;
    amazon?: string;
  };
  songs?: Array<string>;
};
