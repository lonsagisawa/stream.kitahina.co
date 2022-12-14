import Link from "next/link";

interface headerProps {
  subTitle?: string;
  color?: string;
}

const Header = ({ subTitle }: headerProps) => {
  return (
    <header className="py-4">
      <h1 className="font-black">
        <Link href="/" className="text-4xl">
          STREAM@S
        </Link>{" "}
        <span className="text-3xl ml-3">{subTitle}</span>
      </h1>
    </header>
  );
};

export default Header;
