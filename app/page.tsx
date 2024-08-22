import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center text-center lg:items-start lg:text-left justify-center bg-gradient-to-r from-darkGlass lg:from-black lg:from-20% to-darkGlass lg:to-glass ">
      <div>
        <div className="p-24 sm:p-32">
          <h1 className="empTextDiv text-6xl lg:text-8xl mb-6 font-semibold">{`Hi, I'm `}<span className="empText">{`Dean`}</span></h1>
          <h4 className="text-2xl lg:text-4xl font-extralight mb-16">Designer, Developer, Media Engineer</h4>
          <div className="flex justify-center lg:justify-start flex-wrap gap-8">
            <Link href={"mailto:contact@deandivizio.com"} className="px-16 py-2 rounded-lg bg-gradient-to-r from-mint to-mint-dark text-xl font-light transition hover:scale-105 ease-in-out duration-300">Contact</Link>
            <div className="rounded-lg bg-gradient-to-r from-mint to-mint-dark p-px flex items-center justify-center transition hover:scale-105 ease-in-out duration-300"><Link className="bg-black px-12 sm:px-16 py-2 rounded-lg text-xl font-thin" href={"/work"}>View Work</Link></div>
          </div>
        </div>
      </div>
     <div className="h-screen w-screen fixed -z-50">
      <Image src="https://api.deandivizio.com/wp-content/uploads/2024/02/DSC03928-Large.jpeg" fill={true} alt="" className="object-cover fadeOutOnLoad"/>
      <video src="https://api.deandivizio.com/wp-content/uploads/2024/08/PortfilioBGVid_720_650k.mp4" autoPlay playsInline muted loop className=" min-w-full min-h-screen object-cover object center"/>
     </div>
     <div className=" backdrop-blur-lg sm:backdrop-blur-md absolute min-h-[100%] w-screen top-0 left-0 -z-40"></div>
    </main>
  );
}
