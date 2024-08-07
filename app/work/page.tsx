import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SiteExampleSlate from "@/components/SiteExampleSlate";
import ImageCarousel from "@/components/ImageCarousel";
import MediaSection from "@/components/MediaSection";
import DesignSlider from "@/components/DesignSlider";


export default function Work() {

  let designBody = "I try to be diverse in my design mediums. While web is what I'm most passionate about, I also enjoy all components of brand design; logos, style guides, business cards, etc. <br><br>I have a few examples here but if you'd like to see more detailed examples, you can click the buttons below for detailed write-ups on the design and development of these brands.";

  return (
    <main className="flex min-h-screen flex-col items-center text-center sm:items-start sm:text-left justify-center bg-gradient-to-r from-darkGlass lg:from-black lg:from-20% to-darkGlass lg:to-glass ">
      <div className="min-h-screen flex items-center">
        <div className="p-24 sm:p-32">
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
          <div className="pt-24 sm:pt-32 pb-24">
            <h2 className="empTextDiv text-6xl sm:text-8xl mb-6 font-semibold text-center text-slate">{`Web`}</h2>
            <h4 className="text-2xl sm:text-4xl font-light mb-16 text-center text-blue">{`Design // Develop`}</h4>
          </div>
          <div className="flex flex-row items-center justify-center" >
            <Carousel opts={{ align: "start", loop: true, }} orientation="vertical">
              <CarouselContent className="h-[550px]">
                <CarouselItem>
                  <SiteExampleSlate
                    heading="OVRTONE Media Group"
                    tech="Next.js, WordPress, AWS, Sendgrid"
                    body="OVRTONE Media Group is a media production and design company with the goal of helping local businesses. It's ran as a side project by myself and my business partner, Alex. <br><br>
                              Our goals in this redesign were strike a balance between unique, artistic, and media-focused; and easy to use, accessible, and minimalistic. We wanted to execute our brand image and showcase our work in a way that feels natural. <br> <br>
                              In the end, we landed on a site that's unique enough to feel personable, while using enough common design patterns to feel immediately familiar."
                    writeUpLink="/work/ovrtone"
                    siteLink="https://www.ovrtonemedia.com"
                    img1={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONE1.webp", width: 2000, height: 1000 }}
                    img2={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONE2.webp", width: 2000, height: 1000 }}
                    img3={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONE3.webp", width: 2000, height: 1000 }} />
                </CarouselItem>
                <CarouselItem>
                  <SiteExampleSlate
                    heading="Capital Podiatry"
                    tech="Wordpress"
                    body="Originally designed and built by me, this is a great example of a modern, airy, and light feeling site. The client's goals were to make it simple, inviting, and direct, so that users felt compforatble while also having clear CTAs wherever possible. <br><br>
                              While no longer maintained by me, enough of my original design is still present to warrant checking it out if you're interested."
                    siteLink="https://capitalfeel.com"
                    img1={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/CapitalPod1.webp", width: 2000, height: 1000 }}
                    img2={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/CapitalPod2.webp", width: 2000, height: 1000 }}
                  />
                </CarouselItem>
                <CarouselItem>
                  <SiteExampleSlate
                    heading="Bark Productions"
                    tech="Next.js, WordPress"
                    body="Bark Productions is a live events company in the the Chicagoland area. The owner approached me wanting a site that was fast and visually appealling; essentially acting as a half digital business card and half showcase of prior projects. <br><br>
                              While the bulk of the site is built on Next.js, it uses WordPress as a CMS to allow the client to easily update content on his own - which was a core requirement of this project. <br><br>
                              Bark Productions is a client of OVRTONE's and has agreed to allow us to discuss his project in detail. You can read more about his site, as well as the design of his brand overall below."
                    writeUpLink="/work/barkproductions"
                    siteLink="https://www.barkpro.live"
                    img1={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/BarkPro1.webp", width: 2000, height: 1000 }}
                    img2={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/BarkPro2.webp", width: 2000, height: 1000 }} />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
      {/* third section */}
      <MediaSection />
      <div id="design" className="min-h-screen w-screen whiteGeoBG flex flex-row justify-center items-start" >
        <div className=" h-full backdrop-blur-sm flex flex-col">
          <div className="pt-24 sm:pt-32 pb-8">
            <h2 className="empTextDiv text-6xl sm:text-8xl mb-6 font-semibold text-center text-slate">{`Design`}</h2>
            <h4 className="text-2xl sm:text-4xl font-light mb-16 text-center text-blue">{`Print // Branding`}</h4>
          </div>
          <div className="flex flex-row items-center justify-center" >
            <div className="grid grid-cols-2 items-center gap-48 pl-36 pr-36 pb-8">
              <div>
                <h3 className="text-slate text-4xl mb-8">{'Beyond Web'}</h3>
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
