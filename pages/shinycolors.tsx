import Header from "../components/header";
import Head from "next/head";
import Link from "next/link";
import tailwindcssConfig from "../tailwind.config";

const API_ENDPOINT =
  process.env.API_ENDPOINT || "https://stream-api.kitahina.co";

export const getStaticProps = async () => {
  const res = await fetch(`${API_ENDPOINT}/album/shinycolors`);
  const resJson = await res.json();
  const data = resJson.data;

  return {
    props: { data },
  };
};

const AlbumItem = ({ id, name }: any) => {
  return (
    <li>
      <Link
        href={`/album/${id}`}
        className="underline hover:text-sky-500 transition"
      >
        {name}
      </Link>
    </li>
  );
};

const ShinyColors = ({ data }: any) => {
  // BRILLI@NT WING
  const BrilliantWingAlbums = data.map((item: any) =>
    item.series == "BRILLI@NT WING" ? (
      <AlbumItem id={item.id} name={item.name} key={item.id} />
    ) : null
  );

  // FR@GMENT WING
  const FragmentWingAlbums = data.map((item: any) =>
    item.series == "FR@GMENT WING" ? (
      <AlbumItem id={item.id} name={item.name} key={item.id} />
    ) : null
  );

  // GR@DATE WING
  const GradateWingAlbums = data.map((item: any) =>
    item.series == "GR@DATE WING" ? (
      <AlbumItem id={item.id} name={item.name} key={item.id} />
    ) : null
  );

  // COLORFUL FE@THERS
  const ColorfulFeathersAlbums = data.map((item: any) =>
    item.series == "COLORFUL FE@THERS" ? (
      <AlbumItem id={item.id} name={item.name} key={item.id} />
    ) : null
  );

  // L@YERED WING
  const LayeredWingAlbums = data.map((item: any) =>
    item.series == "L@YERED WING" ? (
      <AlbumItem id={item.id} name={item.name} key={item.id} />
    ) : null
  );

  // Synthe-Side
  const SyntheSideAlbums = data.map((item: any) =>
    item.series == "Synthe-Side" ? (
      <AlbumItem id={item.id} name={item.name} key={item.id} />
    ) : null
  );

  // OFF VOCAL COLLECTION
  const OffVocalCollectionAlbums = data.map((item: any) =>
    item.series == "OFF VOCAL COLLECTION" ? (
      <AlbumItem id={item.id} name={item.name} key={item.id} />
    ) : null
  );

  // P@NORAMA WING
  const PanoramaWingAlbums = data.map((item: any) =>
    item.series == "P@NORAMA WING" ? (
      <AlbumItem id={item.id} name={item.name} key={item.id} />
    ) : null
  );

  // WING COLLECTION
  const WingCollectionAlbums = data.map((item: any) =>
    item.series == "WING COLLECTION" ? (
      <AlbumItem id={item.id} name={item.name} key={item.id} />
    ) : null
  );

  return (
    <div
      className="container mx-auto px-4 max-w-2xl"
      style={{
        ["--color-brand" as any]:
          tailwindcssConfig.theme?.extend.colors.brand["shinycolors"].DEFAULT,
      }}
    >
      <Head>
        <title>STREAM@S - Shiny Colors</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header brand="shinycolors" />
      <details>
        <summary className="text-xl font-bold">BRILLI@NT WING</summary>
        <ul>{BrilliantWingAlbums}</ul>
      </details>

      <details>
        <summary className="text-xl font-bold">FR@GMENT WING</summary>
        <ul>{FragmentWingAlbums}</ul>
      </details>

      <details>
        <summary className="text-xl font-bold">GR@DATE WING</summary>
        <ul>{GradateWingAlbums}</ul>
      </details>

      <details>
        <summary className="text-xl font-bold">COLORFUL FE@THERS</summary>
        <ul>{ColorfulFeathersAlbums}</ul>
      </details>

      <details>
        <summary className="text-xl font-bold">L@YERED WING</summary>
        <ul>{LayeredWingAlbums}</ul>
      </details>

      <details>
        <summary className="text-xl font-bold">Synthe-Side</summary>
        <ul>{SyntheSideAlbums}</ul>
      </details>

      <details>
        <summary className="text-xl font-bold">OFF VOCAL COLLECTION</summary>
        <ul>{OffVocalCollectionAlbums}</ul>
      </details>

      <details>
        <summary className="text-xl font-bold">P@NORAMA WING</summary>
        <ul>{PanoramaWingAlbums}</ul>
      </details>

      <details>
        <summary className="text-xl font-bold">WING COLLECTION</summary>
        <ul>{WingCollectionAlbums}</ul>
      </details>

      <details>
        <summary className="text-xl font-bold">OTHER</summary>
        <ul>
          <li>
            <Link
              href="/album/lzc-2059"
              className="underline hover:text-sky-500 transition"
            >
              神様は死んだ、って
            </Link>
          </li>
          <li>
            <Link
              href="/album/lacm-24027"
              className="underline hover:text-sky-500 transition"
            >
              なんどでも笑おう - シャイニーカラーズ盤
            </Link>
          </li>
          <li>
            <Link
              href="/album/lacm-24165"
              className="underline hover:text-sky-500 transition"
            >
              VOY@GER - シャイニーカラーズ盤
            </Link>
          </li>
          <li>
            <Link
              href="/album/moiw2023"
              className="underline hover:text-sky-500 transition"
            >
              CRYST@LOUD
            </Link>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default ShinyColors;
