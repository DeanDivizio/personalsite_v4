import Image from "next/image";
import Link from "next/link";
import SiteCarousel from "@/components/SiteCarousel";
import SiteExampleSlate from "@/components/SiteExampleSlate";
import ImageCarousel from "@/components/ImageCarousel";
import MediaSection from "@/components/MediaSection";
import DesignSlider from "@/components/DesignSlider";


export default function Work() {

  let designBody = "I try to be diverse in my design mediums. While web is what I'm most passionate about, I also enjoy all components of brand design; logos, style guides, business cards, etc. <br><br>I have a few examples here but if you'd like to see more detailed examples, you can click the buttons below for detailed write-ups on the design and development of these brands.";

  return (
    <main className="flex min-h-screen flex-col items-center text-center sm:items-start sm:text-left justify-center bg-gradient-to-r from-darkGlass lg:from-black lg:from-20% to-darkGlass lg:to-glass overflow-x-hidden">
      <div className="min-h-screen flex items-center">
        <div className="p-12 sm:p-32">
          <h1 className="empTextDiv text-6xl sm:text-8xl mb-6 font-semibold">{`My `}<span className="empText">{`Work`}</span></h1>
          <h4 className="text-2xl sm:text-4xl font-extralight mb-16"><span className="font-semibold">{`Jump to: `}</span><a href="#web" className="underline font-thin">Web</a> | <a href="#media" className="underline font-thin">Photo & Video</a> | <a href="#design" className="underline font-thin">Design</a></h4>
        </div>
      </div>
      <div className=" absolute w-screen min-h-screen -z-50 top-0" >
        <Image src="https://api.deandivizio.com/wp-content/uploads/2024/02/DSC06894-scaled.jpg" width={2560} height={1724} alt="" />
      </div>
      <div className=" backdrop-blur-lg sm:backdrop-blur-md absolute min-h-screen w-screen top-0 left-0 -z-40"></div>
      {/* second section */}
      <div id="web" className="min-h-screen w-screen whiteGeoBG flex flex-row justify-center items-start" >
        <div className=" h-full backdrop-blur-sm flex flex-col">
          <div className="pt-24 sm:pt-32 pb-12 sm:pb-24">
            <h2 className="empTextDiv text-6xl sm:text-8xl mb-6 font-semibold text-center text-slate">{`Web`}</h2>
            <h4 className="text-2xl sm:text-4xl font-light mb-12 sm:mb-16 text-center text-blue">{`Design // Develop`}</h4>
          </div>
          <SiteCarousel />
        </div>
      </div>
      {/* third section */}
      <MediaSection />
      <div id="design" className="min-h-screen w-screen whiteGeoBG flex flex-row justify-center items-start" >
        <div className=" h-full backdrop-blur-sm flex flex-col">
          <div className="pt-24 sm:pt-32 sm:pb-8">
            <h2 className="empTextDiv text-6xl sm:text-8xl mb-6 font-semibold text-center text-slate">{`Design`}</h2>
            <h4 className="text-2xl sm:text-4xl font-light mb-8 sm:mb-16 text-center text-blue">{`Print // Branding`}</h4>
          </div>
          <div className="flex flex-row items-center justify-center" >
            <div className="grid grid-rows-2 sm:grid-cols-2 items-center sm:gap-48 px-8 sm:px-36 pb-8">
              <div className="order-2 sm:order-1">
                <h3 className="text-slate text-4xl mb-8 ">{'Beyond Web'}</h3>
                <p className="text-slate text-xl font-light tracking-wide mb-16" dangerouslySetInnerHTML={{ __html: designBody }}></p>
                <div className="flex justify-center lg:justify-start flex-wrap gap-8">
                  <Link href='/work/ovrtone' className="px-16 py-2 rounded-lg bg-gradient-to-r from-mint to-mint-dark text-xl font-light transition hover:scale-105 ease-in-out duration-300">{"OVRTONE Media"}</Link>
                  <Link href='/work/barkproductions' className="px-16 py-2 rounded-lg bg-gradient-to-r from-mint to-mint-dark text-xl font-light transition hover:scale-105 ease-in-out duration-300">{"Bark Productions"}</Link>
                </div>
              </div>
                <DesignSlider />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
