import Link from "next/link";

interface headerProps {
  brand?: string;
}

const BrandTitle = ({ brand }: headerProps) => {
  if (brand == "allstars") {
    return (
      <Link href="/allstars" className="text-3xl font-bold">
        765PRO ALLSTARS
      </Link>
    );
  } else if (brand == "cinderellagirls") {
    return (
      <Link href="/cinderellagirls" className="text-3xl font-bold">
        Cinderella Girls
      </Link>
    );
  } else if (brand == "millionlive") {
    return (
      <Link href="/millionlive" className="text-3xl font-bold">
        Million Live
      </Link>
    );
  } else if (brand == "sidem") {
    return (
      <Link href="/sidem" className="text-3xl font-bold">
        SideM
      </Link>
    );
  } else if (brand == "shinycolors") {
    return (
      <Link href="/shinycolors" className="text-3xl font-bold">
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
        <Link href="/" className="text-4xl hover:border-b-2 border-amber-300">
          STREAM@S
        </Link>
      </h1>
      <BrandTitle brand={brand} />
      <p>
        <Link href="/about" className="underline">
          STREAM@Sとは？
        </Link>
      </p>
    </header>
  );
};

export default Header;
