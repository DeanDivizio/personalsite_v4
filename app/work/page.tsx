import Image from "next/image";
import Link from "next/link";
import SiteCarousel from "@/components/SiteCarousel";
import SiteExampleSlate from "@/components/SiteExampleSlate";
import ImageCarousel from "@/components/ImageCarousel";
import MediaSection from "@/components/MediaSection";
import DesignSlider from "@/components/DesignSlider";
import ParticleBG from "@/components/ParticleBG";


export default function Work() {

  let designBody = "I try to be diverse in my design mediums. While web is what I'm most passionate about, I also enjoy all components of brand design; logos, style guides, business cards, etc. <br><br>I have a few examples here but if you'd like to see more detailed examples, you can click the buttons below for detailed write-ups on the design and development of these brands.";

  return (
    <main className="flex min-h-screen flex-col items-center text-center lg:items-start lg:text-left justify-center overflow-x-hidden pb-16">
      <div className="from-darkGlass lg:from-black lg:from-20% to-darkGlass lg:to-glass bg-work-bg w-screen overflow-hidden">
        <div className="min-h-screen flex items-center">
          <div className="p-12 lg:p-32">
            <h1 className="empTextDiv text-6xl sm:text-8xl mb-6 font-semibold">{`My `}<span className="empText">{`Work`}</span></h1>
            <h4 className="text-2xl lg:text-4xl font-extralight mb-16"><span className="font-semibold">{`Jump to: `}</span><a href="#web" className="underline font-thin">Web</a> | <a href="#media" className="underline font-thin">Photo & Video</a> | <a href="#design" className="underline font-thin">Design</a></h4>
          </div>
        </div>
        <div className=" backdrop-blur-lg lg:backdrop-blur-md absolute min-h-screen w-screen top-0 left-0 -z-40"></div>
      </div>
      <div>
        <div id="web" className="min-h-screen w-screen flex flex-row justify-center items-start backdrop-blur-sm" >
          <div className="flex justify-center flex-col">
            <div className="pt-16 pb-48 md:pb-16 lg:py-32">
              <h2 className="empTextDiv text-6xl sm:text-8xl mb-6 font-semibold text-center text-slate">{`Web`}</h2>
              <h4 className="text-2xl sm:text-4xl font-light lg:mb-16 text-center text-blue">{`Design // Develop`}</h4>
            </div>
            <SiteExampleSlate
                    heading="OVRTONE Media Group"
                    tech="Next.js, WordPress, AWS, Sendgrid"
                    body="OVRTONE Media Group is a media production and design company with the goal of helping local businesses. It's ran as a side project by myself and my business partner, Alex. <br><br>Our goals in this redesign were strike a balance between unique, artistic, and media-focused; and easy to use, accessible, and minimalistic. We wanted to execute our brand image and showcase our work in a way that feels natural. <br> <br>In the end, we landed on a site that's unique enough to feel personable, while using enough common design patterns to feel immediately familiar."
                    writeUpLink="/work/ovrtone"
                    siteLink="https://www.ovrtonemedia.com"
                    img1={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONE1.webp", width: 2000, height: 1000 }}
                    img2={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONE2.webp", width: 2000, height: 1000 }}
                    img3={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONE3.webp", width: 2000, height: 1000 }} />
            <SiteExampleSlate
                    heading="Capital Podiatry"
                    tech="Wordpress"
                    body="Originally designed and built by me, this is a great example of a modern, airy, and light feeling site. The client's goals were to make it simple, inviting, and direct, so that users felt compforatble while also having clear CTAs wherever possible. <br><br>
                              While no longer maintained by me, enough of my original design is still present to warrant checking it out if you're interested."
                    siteLink="https://capitalfeel.com"
                    img1={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/CapitalPod1.webp", width: 2000, height: 1000 }}
                    img2={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/CapitalPod2.webp", width: 2000, height: 1000 }}
                    reverse={true} 
                        />
             <SiteExampleSlate
                    heading="Bark Productions"
                    tech="Next.js, WordPress"
                    body="Bark Productions is a live events company in the the Chicagoland area. The owner approached me wanting a site that essentially acted as a half digital business card and half showcase of prior projects. <br><br>
                                While the bulk of the site is built on Next.js, it uses WordPress as a CMS to allow the client to easily update content on his own - which was a core requirement of this project. <br><br>
                                You can read more about his site, as well as the design of his brand overall below."
                    writeUpLink="/work/barkproductions"
                    siteLink="https://www.barkpro.live"
                    img1={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/BarkPro1.webp", width: 2000, height: 1000 }}
                    img2={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/BarkPro2.webp", width: 2000, height: 1000 }} />
          </div>
        </div>
        <ParticleBG />
      </div>
      <MediaSection />
      <div id="design" className="min-h-screen w-screen flex flex-row justify-center items-start overflow-hidden lg:max-h-[900px]" >
        <div className=" h-full w-screen  flex flex-col">
          <div className="pt-24 sm:pt-32 sm:pb-8 backdrop-blur-sm">
            <h2 className="empTextDiv text-6xl md:text-8xl mb-6 font-semibold text-center text-slate">{`Design`}</h2>
            <h4 className="text-2xl lg:text-4xl font-light mb-8 lg:mb-16 text-center text-blue">{`Print // Branding`}</h4>
          </div>
          <div className="flex flex-row items-center justify-center backdrop-blur-sm " >
            <div className="grid grid-rows-2 lg:grid-cols-2 items-center md:gap-16 lg:gap-48 px-8 lg:px-36 pb-8 ">
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
          <ParticleBG />
        </div>
      </div>
    </main>
  );
}
