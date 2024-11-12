import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";
import Link from "next/link";
import { Cinzel_Decorative } from "next/font/google";

const ovrtoneFont = Cinzel_Decorative({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
  })

export default function ReferenceLetterCard({ name, link, image, subtitle, initials, isAlex }: { name: string; link: string; image?: string; subtitle: string, initials: string; isAlex?:boolean }) {

    return (
        <Link href={link} className="mb-4">
            <Card className="grid grid-cols-4 p-6 hover:scale-[102%] transition-all duration-300 bg-gradient-to-br from-slate to-slate-dark border-black rounded-lg">
                <div className="col-span-1 content-center">
                    <Avatar className="w-16 h-16 md:w-32 md:h-32 shadow-lg">
                        <AvatarImage src={image} />
                        <AvatarFallback className="text-xl text-white bg-gradient-to-br from-blue-light to-black">{initials}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="col-span-3 pl-6 flex flex-col justify-center">
                <h3 className="text-2xl font-medium text-white">{name}</h3>
                {isAlex ? <p className="text-offWhite font-light md:font-normal">{`Co-Founder of `}<span className={ovrtoneFont.className} style={{color: 'var(--green)'}}>OVRTONE</span>{` Media Group`}</p>: <p className="text-offWhite font-light md:font-normal">{subtitle}</p> }
                </div>
            </Card>
        </Link>
    )
}