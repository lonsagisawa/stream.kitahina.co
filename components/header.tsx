import Link from "next/link";
import styles from "./header.module.scss";

interface headerProps {
  brand?: string;
}

const BrandTitle = ({ brand }: headerProps) => {
  if (brand == "allstars") {
    return (
      <Link href="/allstars" className={styles.brand_765as}>
        765PRO ALLSTARS
      </Link>
    );
  } else if (brand == "cinderellagirls") {
    return (
      <Link href="/cinderellagirls" className={styles.brand_cinderellagirls}>
        Cinderella Girls
      </Link>
    );
  } else if (brand == "millionlive") {
    return (
      <Link href="/millionlive" className={styles.brand_millionlive}>
        Million Live
      </Link>
    );
  } else if (brand == "sidem") {
    return (
      <Link href="/sidem" className={styles.brand_sidem}>
        SideM
      </Link>
    );
  } else if (brand == "shinycolors") {
    return (
      <Link href="/shinycolors" className={styles.brand_shinycolors}>
        Shiny Colors
      </Link>
    );
  } else {
    return <span className={styles.brand_common}></span>;
  }
};

const Header = ({ brand }: headerProps) => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/" className={styles.header_title}>
          STREAM@S
        </Link>
      </h1>
      <BrandTitle brand={brand} />
    </header>
  );
};

export default Header;
