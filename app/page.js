import Image from "next/image";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Pricing from "./components/layout/Pricing";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* main */}
      <div className="flex justify-between items-center h-[94vh] pl-20 pr-20 mt-10">
        <div className="flex flex-col items-center space-y-5">
          <span className="text-2xl">For All Your</span>
          <span className="flex font-bold text-3xl text-[#004940]">Small and Medium Enterprise</span>
          <span className="text-2xl">Bookkeeping Needs!</span>
        </div>
        <div>
          <Image src={'/static/images/avatar3.png'} width={600} height={500} />
        </div>
      </div>

      {/* Pricing */}
      <Pricing />

      {/* footer */}
      <Footer />
    </div>
  );
}
