import Image from "next/image"
import ParticleBG from "@/components/ParticleBG"
import BarkProPicCollumn from "@/components/BarkProPicCollumn"

export default function BarkProPage() {
    return (
        <main>
            <div id="heroContent" className="flex min-h-screen flex-col items-center text-center lg:items-start lg:text-left justify-center">
            <div id="ovrtoneHero" className="min-h-screen p-36 flex flex-col justify-center">
                <h1 className="text-6xl mb-4">Bark Productions</h1>
                <h4 className="text-2xl font-extralight tracking-wide text-offWhite">A Design and Development Breakdown</h4>
            </div> 
            </div>

            <div id="heroBG" className="h-screen w-screen absolute top-0 left-0 min-h-screen -z-[11] overflow-clip">
                <Image src="https://api.deandivizio.com/wp-content/uploads/2024/08/BarkPro1.webp" width={2000} height={1000} alt="" className="object-cover" style={{minHeight: "100vh", minWidth: "100vw"}} />
            </div>
            <div id="heroBGOverlay" className=" backdrop-blur-md sm:backdrop-blur-md bg-gradient-to-r from-darkGlass lg:from-black lg:from-20% to-darkGlass lg:to-glass absolute min-h-screen w-screen top-0 left-0 -z-10"></div>
            <div>
                <div id="ovrtoneBrand" className="min-h-screen p-48 flex flex-col justify-center items-center backdrop-blur-[4px]">
                    <div className="flex flex-col items-center">
                        <h2 className="empTextDiv text-6xl sm:text-8xl mb-8 font-semibold text-center text-slate">{`Brand Design`}</h2>
                        <h3 className="text-center text-4xl font-extralight text-blue mb-16">The Core Concept</h3>
                        <p className="text-lg text-slate text-center tracking-wider mb-16 font-light">{`Bark Productions is a live events company based out of Chicagoland. They handle audio and video for events ranging from corporate conferences to concerts.`}</p>
                        <p className="text-xl text-slate text-center tracking-wider mb-12 font-light italic">{`When speaking with the owner, it was clear we needed a brand that was fun, professional, modern, and techy.`}</p>
                        <hr className="border-mint w-[33%] mb-16"></hr>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div>
                            <div id="ovrtoneLogo" className="mb-8">
                                <h3 className="text-4xl text-slate mb-6">Starting with the Logo</h3>
                                <p className="text-lg text-slate tracking-wider font-light mb-4">{`When designing a brand, I always start with the logo. It needs to be a sort of sample platter of all the different elements that make up the brand; namely feel, type, and color.`}</p>
                                <p className="text-lg text-slate tracking-wider font-light">{`For Bark, I knew from the beginning (with confirmation from the owner) that some start of dog silhouette was the likely path. The final version is a stylized 2d side profile of a German Shepherd. It uses a mix of sharp corners and curves to be both techy and friendly. It integrates the primary brand color as well as both the primary neutrals.`}</p>
                            </div>
                            <div id="ovrtoneType" className="mb-8">
                                <h3 className="text-4xl text-slate mb-6">Typography</h3>
                                <p className="text-lg text-slate tracking-wider font-light mb-4">{`In terms of fonts, I wanted a primary and secondary. They both needed to be both web and type safe and (obviously) gel well together.`}</p>
                                <p className="text-lg text-slate tracking-wider font-light">{`For the primary font, I decided on Audiowide. It's big, bold, and modern, but not over the top or gaudy. For a secondary, I opted for Adbent Pro. It's a slick, modern, and techy sans serif font that's easy to read and just feels like it's meant to be paired with Audiowide.`}</p>
                            </div>
                            <div id="ovrtoneColors" className="mb-8">
                                <h3 className="text-4xl text-slate mb-6">Colors</h3>
                                <p className="text-lg text-slate tracking-wider font-light mb-4">{`The owner knew he wanted "red" as the primary and that's about it. I found the final shade to be bold enough to stand out without feeling disjointed from the rest of the brand`}</p>
                                <p className="text-lg text-slate tracking-wider font-light">{`In addition to light and dark variants of the primary red, I wanted to make sure to equip the brand with a at least a secondary color. With lighting being a huge component of the company's services, I opted to use a shade of blue for a secondary color, and a shade of green for a tertiary color - should it ever be needed.`}</p>
                            </div>
                        </div>
                        <Image className="max-w-[66%] inline-block ml-64 mr-64 shadow-lg" src={"https://api.deandivizio.com/wp-content/uploads/2024/08/BarkPro2-1.webp"} width={2000} height={2000} alt="OVRTONE Media Group Logo" />
                    </div>
                </div>
                <ParticleBG />
            </div>
            <div id="ovrtoneSite" className="min-h-screen darkGeoBG">
                <div className="w-full h-full p-48 backdrop-blur-md">
                    <div className="flex flex-col items-center">
                        <h2 className="empTextDiv text-6xl sm:text-8xl mb-8 font-semibold text-center text-white">{`The Website`}</h2>
                        <h3 className="text-center text-4xl font-extralight text-mint mb-16">Our Goals</h3>
                        <p className="text-lg text-offWhite text-center tracking-wider mb-16 font-light">{`The owner of Bark Productions had a few main requirements for his site. Namely, it needed to highlight contact information, give a little bit information about the company, and show some pictures from prior events. Most importantly, all of the content needed to be able to be updated by him, easily.`}</p>
                        <p className="text-xl text-offWhite text-center tracking-wider mb-12 font-light italic">{`Essentially, what he needed was a flexible solution that was something in between a website and digital business card.`}</p>
                        <hr className="border-mint-dark w-[33%] mb-24"></hr>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div>
                            <div id="ovrtoneSiteDesign" className="mb-8">
                                <h3 className="text-4xl text-white mb-6">Design Framework</h3>
                                <p className="text-lg text-offWhite tracking-wider font-light mb-4">{`Designing this site was interesting since the client doesn't have a lot of content for it. We decided to go with a micro-page layout, where the background, header, and footer all stay constant and navigation determines the module that displays inbetween.`}</p>
                                <p className="text-lg text-offWhite tracking-wider font-light">{`Since the background (a client photo from an event they did) conveys the brand colors, most of the text can be white - with the only exception being links that have a white to red gradient to differentiate them.`}</p>
                                <p className="text-lg text-offWhite tracking-wider font-light">{`I'd also be remiss without mentioning the intro animation. The fade from black and focus pull animation is fast and fun, so it introduces the site in a nice way witout feeling like it gets in the way. It also gives a bit of time for the content to come back from WordPress, which is, you know, neat.`}</p>
                            </div>
                            <div id="ovrtoneSiteDev" className="mb-8">
                                <h3 className="text-4xl text-white mb-6">Development</h3>
                                <p className="text-lg text-offWhite tracking-wider font-light mb-8">{`For the sake of flexibility and developer experience, as well as the client's need for content management, I went with my typical primary tech stack of Next.js and WordPress. We host on the front end on Vercel and utilize Server Actions handle fetching content from WordPress with WPGraphQL.`}</p>
                                <p className="text-lg text-offWhite tracking-wider font-light mb-8">{`The nice thing of this micro-page architechture is, since there isn't a lot of content, I could fetch all of it on the initial page load. I maintain the current module with a useState hook and just conditionally render the module based on its value. Not a very complex solution, but it gets the job done!`}</p>
                                <div className=" border-l-2 pl-8 border-l-mint">
                                    <h4 className="text-3xl font-light text-offWhite mb-6">Next.js</h4>
                                    <p className="text-lg text-offWhite tracking-wider font-light mb-4">{`For this sort of project, Next.js is my framework of choice for a few reasons.`}</p>
                                    <p className="text-lg text-offWhite tracking-wider font-light mb-4">{`Primarily for this was the ease of deploying back end logic using Server Actions. Since speed and ease of creation were really important to me here, not having to spin up a separate backend (espeically since it basically just interfaces with WordPress) is super handy.`}</p>
                                    <p className="text-lg text-offWhite tracking-wider font-light mb-12">{`Additionally, since the client wants to expand the site off the micro-page architecture, the folder-based routing in Next let's me do that in a way that's dead simple. I can just expand the current project instead of needing to rebuild from scratch.`}</p>
                                    <h4 className="text-3xl font-light text-offWhite mb-6">WordPress</h4>
                                    <p className="text-lg text-offWhite tracking-wider font-light mb-12">{`Why WordPress as a CMS? In general, it's really easy to use, both from the client's perspective for adding and editing content, but also from my perspective with WPGraphQL. That's it. Nice 'n simple!`}</p>
                                </div>
                            </div>
                        </div>
                        <BarkProPicCollumn />
                    </div>
                </div>
            </div>
        </main>
    )
}