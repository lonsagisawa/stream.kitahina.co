import Link from "next/link";

interface headerProps {
  brand?: string;
}

const BrandTitle = ({ brand }: headerProps) => {
  if (brand == "allstars") {
    return (
      <Link href="/allstars" className="text-3xl ml-3">
        765PRO ALLSTARS
      </Link>
    );
  } else if (brand == "cinderellagirls") {
    return (
      <Link href="/cinderellagirls" className="text-3xl ml-3">
        Cinderella Girls
      </Link>
    );
  } else if (brand == "millionlive") {
    return (
      <Link href="/millionlive" className="text-3xl ml-3">
        Million Live
      </Link>
    );
  } else if (brand == "sidem") {
    return (
      <Link href="/sidem" className="text-3xl ml-3">
        SideM
      </Link>
    );
  } else if (brand == "shinycolors") {
    return (
      <Link href="/shinycolors" className="text-3xl ml-3">
        Shiny Colors
      </Link>
    );
  } else {
    return <span className="text-3xl ml-3"></span>;
  }
};

const Header = ({ brand }: headerProps) => {
  return (
    <header className="py-4">
      <h1 className="font-black">
        <Link href="/" className="text-4xl hover:border-b-2 border-amber-300">
          STREAM@S
        </Link>
        <BrandTitle brand={brand} />
      </h1>
    </header>
  );
};

export default Header;
