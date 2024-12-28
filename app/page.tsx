import { Metadata } from "next";

export const metadata: Metadata = {
  title: "STREAM@S",
};

const Page = async () => {
  return (
    <p>STREAM@Sは、2024年12月31日に提供を終了いたしました。<br />
      これまでご利用いただきまして、誠にありがとうございました。
    </p>
  );
};

export default Page;
