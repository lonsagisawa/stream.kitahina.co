import Link from "next/link";

interface headerProps {
  brand?: string;
}

const BrandTitle = ({ brand }: headerProps) => {
  if (brand == "allstars") {
    return (
      <Link
        href="/allstars"
        className="text-lg font-bold border-b-2 border-transparent transition hover:border-rose-500"
      >
        765PRO ALLSTARS
      </Link>
    );
  } else if (brand == "cinderellagirls") {
    return (
      <Link
        href="/cinderellagirls"
        className="text-lg font-bold border-b-2 border-transparent transition hover:border-blue-500"
      >
        Cinderella Girls
      </Link>
    );
  } else if (brand == "millionlive") {
    return (
      <Link
        href="/millionlive"
        className="text-lg font-bold border-b-2 border-transparent transition hover:border-yellow-500"
      >
        Million Live
      </Link>
    );
  } else if (brand == "sidem") {
    return (
      <Link
        href="/sidem"
        className="text-lg font-bold border-b-2 border-transparent transition hover:border-emerald-500"
      >
        SideM
      </Link>
    );
  } else if (brand == "shinycolors") {
    return (
      <Link
        href="/shinycolors"
        className="text-lg font-bold border-b-2 border-transparent transition hover:border-sky-500"
      >
        Shiny Colors
      </Link>
    );
  } else {
    return <span className="text-3xl font-bold"></span>;
  }
};

const Header = ({ brand }: headerProps) => {
  return (
    <header className="py-8">
      <h1 className="font-black">
        <Link
          href="/"
          className="text-xl transition border-b-2 border-transparent hover:border-amber-300"
        >
          STREAM@S
        </Link>
      </h1>
      <BrandTitle brand={brand} />
      <div className="flex flex-col md:flex-row mt-2 gap-2">
        <Link
          href="/about"
          className="underline hover:text-amber-400 transition"
        >
          STREAM@Sとは？
        </Link>
        <Link
          href="/info"
          className="underline hover:text-amber-400 transition"
        >
          お知らせ
        </Link>
        <Link
          href="https://twitter.com/kitahinaCo"
          className="underline hover:text-amber-400 transition"
        >
          Twitter
        </Link>
      </div>
    </header>
  );
};

export default Header;
