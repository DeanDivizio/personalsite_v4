import Image from "next/image"
import Link from "next/link"
import ParticleBG from "@/components/ParticleBG"
import OVRTONEPicColumn from "@/components/OVRTONEPicColumn"

export default function OVRTONEPage() {
    return (
        <main>
            <div id="heroContent" className="flex min-h-screen flex-col items-center text-center lg:items-start lg:text-left justify-center">
            <div id="ovrtoneHero" className="min-h-screen p-36 flex flex-col justify-center">
                <h1 className="text-6xl mb-4">OVRTONE Media Group</h1>
                <h4 className="text-2xl font-extralight tracking-wide text-offWhite">A Design and Development Breakdown</h4>
            </div> 
            </div>

            <div id="heroBG" className="h-screen w-screen absolute top-0 left-0 min-h-screen -z-[11] overflow-clip">
                <Image src="https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONE1.webp" width={1920} height={1080} alt="" className="object-cover" style={{minHeight: "100vh", minWidth: "100vw"}} />
            </div>
            <div id="heroBGOverlay" className=" backdrop-blur-md sm:backdrop-blur-md bg-gradient-to-r from-darkGlass lg:from-black lg:from-20% to-darkGlass lg:to-glass absolute min-h-screen w-screen top-0 left-0 -z-10"></div>
            <div>
                <div id="ovrtoneBrand" className="min-h-screen p-48 flex flex-col justify-center items-center backdrop-blur-[4px]">
                    <div className="flex flex-col items-center">
                        <h2 className="empTextDiv text-6xl sm:text-8xl mb-8 font-semibold text-center text-slate">{`Brand Design`}</h2>
                        <h3 className="text-center text-4xl font-extralight text-blue mb-16">The Core Concept</h3>
                        <p className="text-lg text-slate text-center tracking-wider mb-16 font-light">{`As a Media Engineering & Design company, we wanted OVRTONE's brand to balance creativity and formality. It was important to us to keep our layouts and color scheme minimalistic but interesting, to draw more attention to the media we showcase, while keeping our brand's feel fresh`}</p>
                        <p className="text-xl text-slate text-center tracking-wider mb-12 font-light italic">{`Overall, we wanted formal-adjascent fonts, minimal but bold color, and layouts that draw focus to our showcased elements.`}</p>
                        <hr className="border-mint w-[33%] mb-16"></hr>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div>
                            <div id="ovrtoneLogo" className="mb-8">
                                <h3 className="text-4xl text-slate mb-6">Starting with the Logo</h3>
                                <p className="text-lg text-slate tracking-wider font-light mb-4">{`When designing a brand, my starting point is always the logo. To me, the logo should be a distillation of everything that makes up the brand image. It needs to represent the brand's design philosophy, showcase the primary typeface, and integrate the brand's colors (on color variants of the logo).`}</p>
                                <p className="text-lg text-slate tracking-wider font-light">{`In OVRTONE's case, I decided a stylized "O". It's similar to our previous design but both more ornate and sharper. I felt like that hit our design goals of formal-adjascent and minimal.`}</p>
                            </div>
                            <div id="ovrtoneType" className="mb-8">
                                <h3 className="text-4xl text-slate mb-6">Typography</h3>
                                <p className="text-lg text-slate tracking-wider font-light mb-4">{`In terms of fonts, I wanted a primary and secondary. They both needed to be both web and type safe and (obviously) gel well together.`}</p>
                                <p className="text-lg text-slate tracking-wider font-light">{`The O logo is a capital O in the Cinzel Decorative font, so Cinzel Decorative became the primary font. For a secondary, I chose Josephine Sans. It's a slightly ornate sans serif font that's easy to read but also stylish enough to work with CD. I particualrly liked the "e", "w", and "m" characters. Is it weird to be this into fonts? Maybe!`}</p>
                            </div>
                            <div id="ovrtoneColors" className="mb-8">
                                <h3 className="text-4xl text-slate mb-6">Colors</h3>
                                <p className="text-lg text-slate tracking-wider font-light mb-4">{`We went with green and blue as our brand colors. I'm pretty biased towards that combo (in case you haven't noticed from being on this site), but my business partner liked that combo as well.`}</p>
                                <p className="text-lg text-slate tracking-wider font-light">{`The blue is nice and relaxing. The green works with the blue but is bold enough to really pop off the page. These colors also work well with the drone footage of forests and water that we feature on the site.`}</p>
                            </div>
                        </div>
                        <Image className="max-w-[66%] inline-block ml-64 mr-64 shadow-lg" src={"https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONELogo.webp"} width={2000} height={2000} alt="OVRTONE Media Group Logo" />
                    </div>
                </div>
                <ParticleBG />
            </div>
            <div id="ovrtoneSite" className="min-h-screen darkGeoBG">
                <div className="w-full h-full p-48 backdrop-blur-md">
                    <div className="flex flex-col items-center">
                        <h2 className="empTextDiv text-6xl sm:text-8xl mb-8 font-semibold text-center text-white">{`The Website`}</h2>
                        <h3 className="text-center text-4xl font-extralight text-mint mb-16">Our Goals</h3>
                        <p className="text-lg text-offWhite text-center tracking-wider mb-16 font-light">{`Since web design and development is a service we offer, the quality of our site needed to be absolutely top-notch.`}</p>
                        <p className="text-xl text-offWhite text-center tracking-wider mb-12 font-light italic">{`Our top-level goals were, speed, security, ease of use, and uniqueness.`}</p>
                        <hr className="border-mint-dark w-[33%] mb-24"></hr>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div>
                            <div id="ovrtoneSiteDesign" className="mb-8">
                                <h3 className="text-4xl text-white mb-6">Design Framework</h3>
                                <p className="text-lg text-offWhite tracking-wider font-light mb-4">{`When it comes to design, it was important for us to make it very media-heavy. Each page has a fullscreen hero with a featured image. The home page hero uses a video. All of our testimonials have images next to them.`}</p>
                                <p className="text-lg text-offWhite tracking-wider font-light">{`Additionally, we went for a minimal, spaced layout with a sparing use of color. Most of the site consists of grayscaled backgrounds with color reserved for important text and CTA's.`}</p>
                            </div>
                            <div id="ovrtoneSiteDev" className="mb-8">
                                <h3 className="text-4xl text-white mb-6">Development</h3>
                                <p className="text-lg text-offWhite tracking-wider font-light mb-8">{`To facilitate our goals of spped and security (as well as aid in maintenance), I decided on a primary tech stack of Next.js and WordPress. We host on Vercel and utilize SendGrid for contact form submission with Next.js server actions.`}</p>
                                <div className=" border-l-2 pl-8 border-l-mint">
                                    <h4 className="text-3xl font-light text-offWhite mb-6">Next.js</h4>
                                    <p className="text-lg text-offWhite tracking-wider font-light mb-4">{`For this sort of project, Next.js is my framework of choice for a few reasons.`}</p>
                                    <p className="text-lg text-offWhite tracking-wider font-light mb-4">{`It provides a platform with a lot of 'magic'. The Image component that optomizes images automatically, the Link component that automatically handles prefetching, folder-based routing with the App Router, are all great examples. Speed and ease of creation were really important to me and these things help immensely.`}</p>
                                    <p className="text-lg text-offWhite tracking-wider font-light mb-12">{`Additionally, the fact it's a full-stack framework means we can build the front end and back end in the same project. Some may not prefer working that way but as a single developer, this let's me deploy server-side logic that's accessible fromt the front end, without the need to build an API.`}</p>
                                    <h4 className="text-3xl font-light text-offWhite mb-6">WordPress</h4>
                                    <p className="text-lg text-offWhite tracking-wider font-light mb-12">{`Both myself and my business partner have a background in WordPress. I opted to use it as a content management system (through WPQraphQL) to make sure adding and changing content is as easy with as little of a learning curve as possible for all current and future team members.`}</p>
                                    <h4 className="text-3xl font-light text-offWhite mb-6">SendGrid</h4>
                                    <p className="text-lg text-offWhite tracking-wider font-light mb-8">{`Contrary to what I used to do with monolithic WordPress sites (plugins), I wanted to take advantage of the flexibility in Next.js to handle contact forms in a custom way. Building a custom contact form, sanitizing inputs on the front and back ends, then sending submissions to the team through an email has proven to be an extremely functional solution. It also gives us the foundation to do other things with that info, such as adding it to a CRM.`}</p>
                                </div>
                            </div>
                        </div>
                        <OVRTONEPicColumn />
                    </div>
                </div>
            </div>
        </main>
    )
}