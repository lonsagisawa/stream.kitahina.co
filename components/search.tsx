"use client";

import { useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";

const Search = ({ data }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);

  const searchIndex = new Fuse(data, {
    includeScore: true,
    findAllMatches: true,
    threshold: 0.4,
    ignoreLocation: true,
    keys: ["name", "songs"],
  });

  const handleSearch = (searchQuery: string) => {
    setSearchQuery(searchQuery);
    const results = searchIndex.search(searchQuery);
    setSearchResults(results);
  };

  return (
    <>
      <form className="mb-4">
        <div className="w-full rounded-full shadow bg-slate-50 dark:bg-slate-700">
          <input
            type="search"
            id="query"
            placeholder="検索"
            className="w-full py-3 px-6 rounded-full bg-transparent"
            value={searchQuery}
            onChange={(event) => handleSearch(event.target.value)}
          />
        </div>
      </form>
      {searchResults.length > 0 && (
        <>
          <p className="mb-2">検索結果</p>
          <ul className="mb-4">
            {searchResults.map(({ item }: any) => {
              return (
                <Link href={`/album/${item.id}`} key={item.id}>
                  <li
                    key={item.id}
                    className="p-4 mb-2 border rounded border-slate-200 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                  >
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default Search;
