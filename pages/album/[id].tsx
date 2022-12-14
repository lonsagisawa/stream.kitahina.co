import { useRouter } from "next/router";

export async function getStaticPaths() {
  // https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
  const res = await fetch("https://stream-api.kitahina.co/album");
  const albums = await res.json();

  const paths = albums.data.map((data: { id: string }) => ({
    params: { id: data.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  return {
    props: { data: {} },
  };
}

const Album = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>{id}</h1>;
};

export default Album;
