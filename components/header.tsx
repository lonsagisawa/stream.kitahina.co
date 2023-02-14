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
    <header className="mt-6 mb-4">
      <h1 className="font-bold">
        <Link
          href="/"
          className="text-xl transition border-b-2 border-transparent hover:border-amber-300"
        >
          STREAM@S
        </Link>
      </h1>
      <BrandTitle brand={brand} />
    </header>
  );
};

export default Header;
