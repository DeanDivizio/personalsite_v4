import Image from "next/image"
import Link from "next/link"
import ParticleBG from "@/components/ParticleBG"
import OVRTONEPicColumn from "@/components/OVRTONEPicColumn"

export default function OVRTONEPage() {
    return (
        <main>
            <div id="heroContent" className="flex min-h-screen flex-col items-center text-center lg:items-start lg:text-left justify-center bg-ovrtone-bg bg-cover overflow-x-hidden">
                <div className="backdrop-blur-lg w-screen">
                    <div id="ovrtoneHero" className="min-h-screen p-16 sm:p-36 flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-6xl mb-4 leading-[140%] sm:leading-normal">OVRTONE Media Group</h1>
                        <h4 className="text-2xl font-extralight tracking-wide text-offWhite">A Design and Development Breakdown</h4>
                    </div>
                </div>
            </div>
            {/* <div id="heroBG" className="h-screen w-screen absolute top-0 left-0 min-h-screen -z-[11] overflow-clip">
                <Image src="https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONE1.webp" width={1920} height={1080} alt="" className="object-cover" style={{minHeight: "100vh", minWidth: "100vw"}} />
            </div> */}
            <div id="heroBGOverlay" className=" backdrop-blur-md sm:backdrop-blur-md bg-gradient-to-r from-darkGlass lg:from-black lg:from-20% to-darkGlass lg:to-glass absolute min-h-screen w-screen top-0 left-0 -z-10"></div>
            <div className="overflow-x-hidden">
                <div id="ovrtoneBrand" className="min-h-screen p-12 sm:p-48 flex flex-col justify-center items-center backdrop-blur-[4px]">
                    <div className="flex flex-col items-center">
                        <h2 className="empTextDiv text-6xl sm:text-8xl mb-8 font-semibold text-center text-slate">{`Brand Design`}</h2>
                        <h3 className="text-center text-4xl font-extralight text-blue mb-16">The Core Concept</h3>
                        <p className="text-lg text-slate text-center tracking-wider mb-16 font-light">{`As a Media Engineering & Design company, we wanted OVRTONE's brand to balance creativity and formality. It was important to us to keep our layouts and color scheme minimalistic but interesting, to draw more attention to the media we showcase, while keeping our brand's feel fresh`}</p>
                        <p className="text-xl text-slate text-center tracking-wider mb-12 font-light italic">{`Overall, we wanted formal-adjascent fonts, minimal but bold color, and layouts that draw focus to our showcased elements.`}</p>
                        <hr className="border-mint w-[33%] mb-16"></hr>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div className="order-2 mt-16 sm:mt-auto sm:order-1">
                            <div id="ovrtoneLogo" className="mb-8">
                                <h3 className="text-4xl text-slate mb-6">Starting with the Logo</h3>
                                <p className="text-lg text-slate tracking-wider font-light mb-4">{`When designing a brand, my starting point is always the logo. To me, the logo should be a distillation of everything that makes up the brand image. It needs to represent the brand's design philosophy, showcase the primary typeface, and integrate the brand's colors (on color variants of the logo).`}</p>
                                <p className="text-lg text-slate tracking-wider font-light">{`In OVRTONE's case, I decided on a stylized "O." It's similar to our previous design but both more ornate and sharper. I felt that it hit our design goals of being formal-adjacent and minimal.`}</p>
                            </div>
                            <div id="ovrtoneType" className="mb-8">
                                <h3 className="text-4xl text-slate mb-6">Typography</h3>
                                <p className="text-lg text-slate tracking-wider font-light mb-4">{`In terms of fonts, I wanted a primary and secondary option. They both needed to be web-safe and type-safe, and (obviously) gel well together.`}</p>
                                <p className="text-lg text-slate tracking-wider font-light">{`The "O" logo is a capital "O" in the Cinzel Decorative font, so Cinzel Decorative became the primary font. For a secondary, I chose Josefin Sans. It's a slightly ornate sans-serif font that's easy to read but also stylish enough to work with Cinzel Decorative. I particularly liked the "e," "w," and "m" characters. Is it weird to be this into fonts? Maybe!`}</p>
                            </div>
                            <div id="ovrtoneColors" className="mb-8">
                                <h3 className="text-4xl text-slate mb-6">Colors</h3>
                                <p className="text-lg text-slate tracking-wider font-light mb-4">{`We went with green and blue as our brand colors. I'm pretty biased towards that combo (in case you haven't noticed from being on this site), but my business partner liked it as well.`}</p>
                                <p className="text-lg text-slate tracking-wider font-light">{`The blue is nice and relaxing. The green works with the blue but is bold enough to really pop off the page. These colors also work well with the drone footage of forests and water that we feature on the site.`}</p>
                            </div>
                        </div>
                        <Image className="max-w-[66%] inline-block ml-12 sm:ml-64 mr-12 sm:mr-64 shadow-lg order-1 sm:order-2" src={"https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONELogo.webp"} width={2000} height={2000} alt="OVRTONE Media Group Logo" />
                    </div>
                </div>
                <ParticleBG />
            </div>
            <div id="ovrtoneSite" className="min-h-screen darkGeoBG">
                <div className="w-full h-full p-12 sm:p-48 backdrop-blur-md">
                    <div className="flex flex-col items-center">
                        <h2 className="empTextDiv text-6xl sm:text-8xl mb-8 font-semibold text-center text-white">{`The Website`}</h2>
                        <h3 className="text-center text-4xl font-extralight text-mint mb-16">Our Goals</h3>
                        <p className="text-lg text-offWhite text-center tracking-wider mb-16 font-light">{`Since web design and development are services we offer, the quality of our site needed to be absolutely top-notch.`}</p>
                        <p className="text-xl text-offWhite text-center tracking-wider mb-12 font-light italic">{`Our top-level goals were, speed, security, ease of use, and uniqueness.`}</p>
                        <hr className="border-mint-dark w-[33%] mb-24"></hr>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div className="order-2 sm:order-1">
                            <div id="ovrtoneSiteDesign" className="mb-8">
                                <h3 className="text-4xl text-white mb-6">Design Framework</h3>
                                <p className="text-lg text-offWhite tracking-wider font-light mb-4">{`When it comes to design, it was important for us to make it very media-heavy. Each page has a fullscreen hero with a featured image. The home page hero uses a video. All of our testimonials have images next to them.`}</p>
                                <p className="text-lg text-offWhite tracking-wider font-light">{`Additionally, we went for a minimal, spaced layout with a sparing use of color. Most of the site consists of grayscale backgrounds, with color reserved for important text and CTAs.`}</p>
                            </div>
                            <div id="ovrtoneSiteDev" className="mb-8">
                                <h3 className="text-4xl text-white mb-6">Development</h3>
                                <p className="text-lg text-offWhite tracking-wider font-light mb-8">{`To facilitate our goals of speed and security (as well as aid in maintenance), I decided on a primary tech stack of Next.js and WordPress. We host on Vercel and utilize SendGrid for contact form submission with Next.js server actions.`}</p>
                                <div className=" border-l-2 pl-8 border-l-mint">
                                    <h4 className="text-3xl font-light text-offWhite mb-6">Next.js</h4>
                                    <p className="text-lg text-offWhite tracking-wider font-light mb-4">{`For this sort of project, Next.js is my framework of choice for a few reasons.`}</p>
                                    <p className="text-lg text-offWhite tracking-wider font-light mb-4">{`It provides a platform with a lot of 'magic.' The Image component that optimizes images automatically, the Link component that automatically handles prefetching, and folder-based routing with the App Router are all great examples. Speed and ease of creation were really important to me, and these features help immensely.`}</p>
                                    <p className="text-lg text-offWhite tracking-wider font-light mb-12">{`Additionally, the fact that it's a full-stack framework means we can build the front end and back end in the same project. Some may not prefer working that way, but as a single developer, this lets me deploy server-side logic that's accessible from the front end, without the need to build an API.`}</p>
                                    <h4 className="text-3xl font-light text-offWhite mb-6">WordPress</h4>
                                    <p className="text-lg text-offWhite tracking-wider font-light mb-12">{`Both my business partner and I have a background in WordPress. I opted to use it as a content management system (through WPGraphQL) to ensure adding and changing content is as easy as possible, with as little of a learning curve as possible for all current and future team members.`}</p>
                                    <h4 className="text-3xl font-light text-offWhite mb-6">SendGrid</h4>
                                    <p className="text-lg text-offWhite tracking-wider font-light mb-8">{`Contrary to what I used to do with monolithic WordPress sites (using plugins), I wanted to take advantage of the flexibility in Next.js to handle contact forms in a custom way. Building a custom contact form, sanitizing inputs on the front and back ends, and then sending submissions to the team through email has proven to be an extremely functional solution. It also gives us the foundation to do other things with that information, such as adding it to a CRM.`}</p>
                                </div>
                            </div>
                        </div>
                        <OVRTONEPicColumn />
                    </div>
                </div>
            </div>
            <div className="overflow-x-hidden">
                <div id="ovrtonePlans" className="min-h-screen p-12 sm:p-48 flex flex-col justify-center items-center backdrop-blur-[4px]">
                    <div className="flex flex-col items-center">
                        <h2 className="empTextDiv text-6xl sm:text-8xl mb-8 font-semibold text-center text-slate">{`Moving Forward`}</h2>
                        <h3 className="text-center text-4xl font-extralight text-blue mb-16">Plans for the Future</h3>
                        <p className="text-lg text-slate text-center tracking-wider mb-16 font-light">{`The OVRTONE brand and site are in a good spot now but that doesn't mean we stop here.`}</p>
                        <p className="text-xl text-slate text-center tracking-wider mb-12 font-light italic">{`Future plans include media overhauls and a client portal.`}</p>
                        <hr className="border-mint w-[33%] mb-16"></hr>
                    </div>
                    <div className="mt-8">
                        <div id="ovrtoneLogo" className="mb-12">
                            <h3 className="text-4xl text-slate mb-6">Adding More Media</h3>
                            <p className="text-lg text-slate tracking-wider font-light mb-4">{`This is probably the biggest area for improvement on our website. While we have a few examples of our work sprinkled throughout the site, there's no page or section on the service pages dedicated to showcasing examples.`}</p>
                            <p className="text-lg text-slate tracking-wider font-light">{`I plan to resolve this by adding both a page that showcases a lot of our work across all of our service areas, as well as building a module that displays a smaller selection of a specific type of work and can be placed on other pages.`}</p>
                        </div>
                        <div id="ovrtoneType" className="mb-12">
                            <h3 className="text-4xl text-slate mb-6">Replacing AI Graphics</h3>
                            <p className="text-lg text-slate tracking-wider font-light mb-4">{`For the sake of speed, most images that were meant to be purely decorative were generated with DALL-E. This isn't a huge issue, as the graphical elements in question are all dark and blurred background elements. Still, as a media company, all of our media should be done in-house.`}</p>
                            <p className="text-lg text-slate tracking-wider font-light">{`Over the next few months, replacing these AI-generated elements is on our to-do list.`}</p>
                        </div>
                        <div id="ovrtoneColors" className="mb-12">
                            <h3 className="text-4xl text-slate mb-6">Client Portal</h3>
                            <p className="text-lg text-slate tracking-wider font-light mb-4">{`This is by far the most exciting improvement. It's also the most complicated and furthest out ... those things seem to go together more often than not.`}</p>
                            <p className="text-lg text-slate tracking-wider font-light mb-4">{`The idea here is to consolidate all of our client interfacing to one spot. Right now, documents are emailed, photos are uploaded to Pixieset, videos are sent through Google Drive, and payment links are set up in Stripe and then emailed. It's functional but not very elegant.`}</p>
                            <p className="text-lg text-slate tracking-wider font-light">{`Building a portal where clients can upload and download assets, documents, and deliverables, pay their bill, and even purchase new services, would be an extremely elegant solution and simplify the process for both us and our clients.`}</p>
                        </div>
                    </div>
                </div>
                <ParticleBG />
            </div>
            <div id="barkCTA" className="darkGeoBG">
                <div className="w-full p-12 sm:p-48 flex flex-col items-center backdrop-blur-md">
                    <div className="flex flex-col items-center">
                        <h2 className="empTextDiv text-6xl sm:text-8xl mb-8 font-semibold text-center text-white">{`Wrapping Up`}</h2>
                        <h3 className="text-center text-4xl font-extralight text-mint mb-24">{`Places to Go, Things to Read`}</h3>
                        <p className="text-xl text-offWhite text-center tracking-wider mb-16 font-light italic" >{`I never like getting to the end of a webpage and feeling like I've hit a dead-end, so here're a few things you might be interested in!`}</p>
                        <hr className="border-mint-dark w-[33%] mb-24"></hr>
                    </div>
                    <div className="grid grid-rows-3 md:grid-cols-3 max-h-screen md:max-h-[400px] max-w-fit gap-24">
                        <div className="flex flex-col gap-8 items-center">
                            <h4 className="text-offWhite text-2xl mb-2" >Other Write-ups</h4>
                            <Link href='/work/barkproductions' className="px-16 py-2 rounded-lg bg-gradient-to-r from-mint to-mint-dark text-xl font-light max-w-fit transition hover:scale-105 ease-in-out duration-300">{"Bark Productions"}</Link>
                        </div>
                        <div className="flex flex-col gap-8 items-center">
                            <h4 className="text-offWhite text-2xl mb-2" >Elsewhere On-Site</h4>
                            <Link href='/work' className="px-16 py-2 rounded-lg bg-gradient-to-r from-mint to-mint-dark text-xl font-light max-w-fit transition hover:scale-105 ease-in-out duration-300">{"Work"}</Link>
                            {/* <Link href='/blog' className="px-16 py-2 rounded-lg bg-gradient-to-r from-mint to-mint-dark text-xl font-light max-w-fit transition hover:scale-105 ease-in-out duration-300">{"Blog"}</Link> */}
                            <Link href='/about' className="px-16 py-2 rounded-lg bg-gradient-to-r from-mint to-mint-dark text-xl font-light max-w-fit transition hover:scale-105 ease-in-out duration-300">{"About"}</Link>
                        </div>
                        <div className="flex flex-col gap-8 items-center">
                            <h4 className="text-offWhite text-2xl mb-2">Social</h4>
                            <Link href={"https://github.com/DeanDivizio"} className="px-16 py-2 rounded-lg bg-gradient-to-r from-mint to-mint-dark text-xl font-light max-w-fit transition hover:scale-105 ease-in-out duration-300">{"GitHub"}</Link>
                            <Link href={'https://x.com/DeanDivizio'} className="px-16 py-2 rounded-lg bg-gradient-to-r from-mint to-mint-dark text-xl font-light max-w-fit transition hover:scale-105 ease-in-out duration-300">{"X / Twitter"}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}