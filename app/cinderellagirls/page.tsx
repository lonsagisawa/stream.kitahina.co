import { Metadata } from "next";
import Header from "../../components/header";
import CGPlayer from "../../components/cg_player";
import tailwindcssConfig from "../../tailwind.config";

export const metadata: Metadata = {
  title: "STREAM@S - Cinderella Girls",
};

const CinderellaGirls = () => {
  return (
    <div
      className="container mx-auto px-4 max-w-2xl"
      style={{
        ["--color-brand" as any]:
          tailwindcssConfig.theme?.extend.colors.brand["cinderellagirls"]
            .DEFAULT,
      }}
    >
      <Header brand="cinderellagirls" />
      <p className="my-2">
        シンデレラガールズはアルバム単位での開放はなされていないため、日本コロムビアが供給する公式全曲プレイリストを掲載いたします。
      </p>
      <CGPlayer />
    </div>
  );
};

export default CinderellaGirls;
