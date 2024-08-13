import Image from "next/image";
import Link from "next/link";
import ParticleBG from '@/components/ParticleBG'

export default function About() {
    return (
        <main>
            <div id="heroContent" className="flex min-h-screen flex-col items-center text-center lg:items-start lg:text-left justify-center">
                <div>
                    <div className="p-24 sm:p-32">
                        <h1 className="empTextDiv text-6xl sm:text-8xl mb-6 font-semibold"><span className="empText">{`About`}</span>{` Me`}</h1>
                        <h4 className="text-2xl sm:text-4xl font-extralight mb-16">Who I am, What I do</h4>
                        <div className="flex justify-center lg:justify-start flex-wrap gap-8">
                            <Link href={"mailto:contact@deandivizio.com"} className="px-16 py-2 rounded-lg bg-gradient-to-r from-mint to-mint-dark text-xl font-light transition hover:scale-105 ease-in-out duration-300">Contact</Link>
                            <div className="rounded-lg bg-gradient-to-r from-mint to-mint-dark p-px flex items-center justify-center transition hover:scale-105 ease-in-out duration-300"><Link className="bg-black px-12 sm:px-16 py-2 rounded-lg text-xl font-thin" href={"/work"}>View Work</Link></div>
                        </div>
                    </div>
                </div>
                <div id="heroBG" className="h-screen w-screen fixed -z-50">
                    <Image src="https://api.deandivizio.com/wp-content/uploads/2024/08/AboutHeaderImage.webp" fill={true} alt="" className="object-cover" />
                </div>
                <div id="heroBGOverlay" className=" backdrop-blur-md sm:backdrop-blur-md absolute min-h-screen w-screen top-0 left-0 -z-40"></div>
            </div>
            <div id="bio" className="w-screen whiteGeoBG flex flex-row justify-center items-start" >
                <div className="h-full backdrop-blur-sm flex flex-col">
                    <div className="pt-24 sm:pt-40 pb-36 sm:pb-48 pl-16 sm:pl-64 pr-16 sm:pr-64 flex flex-col justify-center items-center backdrop-blur-md">
                        <h2 className="empTextDiv text-6xl sm:text-8xl mb-16 font-semibold text-center text-slate">{`Hi!`}</h2>
                        <p className="text-xl text-slate font-light tracking-wide text-left sm:text-center">{`My name's Dean and I'm a multimedia engineer and designer.`}</p>
                        <br className="mb-8"></br>
                        <p className="text-xl text-slate font-light tracking-wide text-left sm:text-center mb-16">{`While I've held a lot of varied positions across my career (from graphic design, to SEO, content writing, team management, and programming), my goal is always to use my existing skills alongside my desire to learn to adapt to the requirements of my current role.`}</p>
                        {/* <hr className="mb-12 w-[66%] border-blue"></hr> */}
                        <h3 className="text-2xl text-slate-light font-medium sm:tracking-wide sm:text-center mb-12">{`In terms of specifics, I'm proficient in:`}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-16">
                            <div className="flex flex-col">
                                <h4 className="text-slate text-2xl mb-2">Design</h4>
                                <p className="text-slate text-lg font-light">Layout</p>
                                <p className="text-slate text-lg font-light">{`UI/UX`}</p>
                                <p className="text-slate text-lg font-light">Color Theory</p>
                                <p className="text-slate text-lg font-light">Brand Development</p>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-slate text-2xl mb-2">Media</h4>
                                <p className="text-slate text-lg font-light">Photography</p>
                                <p className="text-slate text-lg font-light">Video Production</p>
                                <p className="text-slate text-lg font-light">Lighting Design</p>
                                <p className="text-slate text-lg font-light">Motion Graphics</p>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-slate text-2xl mb-2">Development</h4>
                                <p className="text-slate text-lg font-light">{`Web (React, WordPress)`}</p>
                                <p className="text-slate text-lg font-light">{`iOS (Swift)`}</p>
                                <p className="text-slate text-lg font-light">Source Control</p>
                                <p className="text-slate text-lg font-light">{`Full-stack w/ Front-end Focus`}</p>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-slate text-2xl mb-2">Logistic</h4>
                                <p className="text-slate text-lg font-light">The Adobe Suite</p>
                                <p className="text-slate text-lg font-light">DaVinci Resolve</p>
                                <p className="text-slate text-lg font-light">{`Google Workspace & Office 365`}</p>
                                <p className="text-slate text-lg font-light">{`MacOS, Windows, Linux`}</p>
                            </div>
                        </div>
                        <br className="mb-16 sm:mb-32"></br>
                        <p className="text-xl text-slate font-light tracking-wide text-center italic mb-8 sm:mb-12">{`I find my work to be most fulfilling when I'm using these skills to help others and better the world around me.`}</p>
                        <hr className="border-slate-light border w-[16%] mb-16"></hr>
                        <p className="text-lg sm:text-xl text-slate font-light sm:tracking-wide text-center mb-6">{`I'm not very active on social media but if you'd like my links, here they are. :)`}</p>
                        <div className="grid grid-cols-2">
                            <Link className="text-lg text-slate underline hover:text-mint hover:scale-105 transition-all" href={"https://github.com/DeanDivizio"}>GitHub</Link>
                            <Link className="text-lg text-slate underline hover:text-mint hover:scale-105 transition-all" href={'https://x.com/DeanDivizio'}>X / Twitter</Link>
                        </div>
                    </div>
                    <ParticleBG />
                </div>
            </div>
        </main>
    );
}
