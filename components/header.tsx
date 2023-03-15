import Link from "next/link";

interface headerProps {
  brand?: string;
}

const brands: { [key: string]: string } = {
  allstars: "765PRO ALLSTARS",
  cinderellagirls: "Cinderella Girls",
  millionlive: "Million Live",
  sidem: "SideM",
  shinycolors: "Shiny Colors",
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
      {brand ? (
        <Link
          href={`/${brand}`}
          className="text-lg font-bold border-b-2 border-transparent transition-color hover:border-brand"
        >
          {brands[brand]}
        </Link>
      ) : (
        <span className="text-3xl font-bold"></span>
      )}
    </header>
  );
};

export default Header;
