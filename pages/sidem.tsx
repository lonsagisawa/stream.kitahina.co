import Header from "../components/header";
import Head from "next/head";
import Link from "next/link";

const API_ENDPOINT =
  process.env.API_ENDPOINT || "https://stream-api.kitahina.co";

export const getStaticProps = async () => {
  const albums = {};
  await fetch(`${API_ENDPOINT}/album/sidem`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.data;
    })
    .then((data) => {
      if (data) {
        const series = [...new Set(data.map((album) => album.series))];
        series.map((item) => {
          if (item) {
            albums[item] = data
              .filter((album) => album.series === item)
              .map((album) => {
                const name = album["name"].match(/^(.+?\s)([01]\d)(.*)/);
                album["name"] =
                  name[3].length > 0 ? name[2] + name[3] : name[0];

                return album;
              });
          } else {
            albums["OTHER"] = data.filter((album) => album.series === item);
          }
        });
      }
    });
  await fetch(`${API_ENDPOINT}/album/moiw2023`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.data;
    })
    .then((data) => {
      if (albums["OTHER"] && data) {
        albums["OTHER"].push(data);
      }
    });

  return {
    props: { albums },
  };
};

const SideM = ({ albums }) => {
  const keys = Object.keys(albums);

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <Head>
        <title>STREAM@S - SideM</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header brand="sidem" />
      <p className="my-2">ストリーミングサービスで聴けるSideMの楽曲</p>
      {keys.length > 0 ? (
        keys.map((series, i) => (
          <section key={i} className="mt-8">
            <h2 className="text-xl font-bold">{series}</h2>
            <ul className="mt-2">
              {albums[series].map(({ id, name }, j) => (
                <li key={j}>
                  <Link
                    href={`/album/${id}`}
                    className="block py-1 underline hover:text-brand-sidem transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))
      ) : (
        <p className="py-8 grid place-content-center">取得できませんでした</p>
      )}
    </div>
  );
};

export default SideM;
