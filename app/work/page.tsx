import Image from "next/image";
import Link from "next/link";


export default function Work() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center sm:items-start sm:text-left justify-center bg-gradient-to-r from-darkGlass lg:from-black lg:from-20% to-darkGlass lg:to-glass ">
      <div className="min-h-screen flex items-center">
        <div className="p-24 sm:p-32">
          <h1 className="empTextDiv text-6xl sm:text-8xl mb-6 font-semibold">{`My `}<span className="empText">{`Work`}</span></h1>
          <h4 className="text-2xl sm:text-4xl font-extralight mb-16"><span className="font-semibold">{`Jump to: `}</span><a href="#web" className="underline font-thin">Web</a> | <a href="#media" className="underline font-thin">Photo & Video</a> | <a href="#design" className="underline font-thin">Design</a></h4>
        </div>
      </div>
     <div className=" absolute w-screen min-h-screen -z-50 top-0" >
      <Image src="https://api.deandivizio.com/wp-content/uploads/2024/02/DSC06894-scaled.jpg" width={2560} height={1724} alt=""/>
     </div>
     <div className=" backdrop-blur-lg sm:backdrop-blur-md absolute min-h-screen w-screen top-0 left-0 -z-40"></div>
     {/* second section */}
     <div className="min-h-screen w-screen whiteGeoBG flex flex-row justify-center items-start" >
        <div className=" h-full backdrop-blur-sm flex flex-col">
            <div className="p-24 sm:p-32">
                <h1 className="empTextDiv text-6xl sm:text-8xl mb-6 font-semibold text-center text-slate">{`Web`}</h1>
                <h4 className="text-2xl sm:text-4xl font-light mb-16 text-center text-blue">{`Design // Develop`}</h4>
            </div>
        </div>
      </div>
    </main>
  );
}
