'use client'
import * as React from "react"
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface SiteImage {
    url: string;
    width: number;
    height: number;
    alt?: string;
}
interface SiteProps {
    heading: string;
    tech?: string;
    body: string;
    writeUpLink?: string;
    siteLink: string;
    img1: SiteImage;
    img2?: SiteImage;
    img3?: SiteImage;
}

export default function SiteExampleSlate(props: SiteProps) {

    
        const plugin = React.useRef(
          Autoplay({ delay: 3000, stopOnInteraction: false }))
 

    return(
        <div className="grid grid-cols-2 items-center gap-48 pl-36 pr-36 pb-8">
            <div>
                <h3 className="text-slate text-4xl mb-2">{props.heading}</h3>
                {props.tech ? <h5 className="text-mint text-xl mb-6 font-extralight italic">{props.tech}</h5> : null}
                <p className="text-slate text-xl font-light tracking-wide mb-12" dangerouslySetInnerHTML={{__html: props.body}}></p>
                <div className="flex justify-center lg:justify-start flex-wrap gap-8">
                    {props.writeUpLink ? <Link href={props.writeUpLink} className="px-16 py-2 rounded-lg bg-gradient-to-r from-mint to-mint-dark text-xl font-light transition hover:scale-105 ease-in-out duration-300">{"Read More"}</Link> : null}
                    <div className="rounded-lg bg-gradient-to-r from-mint to-mint-dark p-px flex items-center justify-center transition hover:scale-105 ease-in-out duration-300"><Link href={props.siteLink} className="bg-white px-12 sm:px-16 py-2 rounded-lg text-xl text-slate font-thin">{"View Site"}</Link></div>
                </div>
            </div>
            <div>
            <Carousel  opts={{align: "start", loop: true, }} plugins={[plugin.current]}>
                    <CarouselContent>
                    {props.img1 ? <CarouselItem><Image className="max-w-full" src={props.img1.url} width={props.img1.width} height={props.img1.height} alt={props.img1.alt ? props.img1.alt : ""} /></CarouselItem> : null }
                    {props.img2 ? <CarouselItem><Image className="max-w-full" src={props.img2.url} width={props.img2.width} height={props.img2.height} alt={props.img2.alt ? props.img2.alt : ""} /></CarouselItem> : null }
                    {props.img3 ? <CarouselItem><Image className="max-w-full" src={props.img3.url} width={props.img3.width} height={props.img3.height} alt={props.img3.alt ? props.img3.alt : ""} /></CarouselItem> : null }
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )


}