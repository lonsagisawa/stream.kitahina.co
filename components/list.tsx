import Link from "next/link";
import type { Album, Albums } from "../types/Album";

interface Props {
  albums: Albums;
}

const List = ({ albums }: Props) => {
  const keys = albums && Object.keys(albums);

  return keys.length > 0 ? (
    <>
      {keys.map((series: string, i: number) => (
        <details key={i} className="mt-2">
          <summary className="text-xl font-bold cursor-pointer">
            {series}
          </summary>
          <ul className="mt-2">
            {albums[series].map(
              ({ id, name }: { id: string; name: string }, j: number) => (
                <li key={j}>
                  <Link
                    href={`/album/${id}`}
                    className="block py-1 underline hover:text-brand transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </details>
      ))}
    </>
  ) : (
    <p className="py-8 grid place-content-center">取得できませんでした</p>
  );
};

export default List;
