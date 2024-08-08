'use client'
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
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

    const [isMobile, setIsMobile] = useState(false);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []); 
    useEffect(() => {
        if (width < 768 && !isMobile) {
            setIsMobile(true);
        } else if (width >= 768 && isMobile) {
            setIsMobile(false);
        }
    }, [width, isMobile]);


    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false }))
 

    return(
        <div className="grid grid-rows-2 sm:grid-cols-2 items-center justify-center sm:gap-48 pl-8 sm:pl-36 pr-8 sm:pr-36 pb-16 sm:pb-8 max-w-[80vw] sm:max-w-full">
            <div>
                <h3 className="text-slate text-2xl sm:text-4xl mb-2">{props.heading}</h3>
                {props.tech ? <h5 className="text-mint text-md sm:text-xl mb-6 font-extralight italic">{props.tech}</h5> : null}
                <p className="text-slate text-ms sm:text-xl font-light sm:tracking-wide mb-12" dangerouslySetInnerHTML={{__html: props.body}}></p>
                <div className="flex justify-center lg:justify-start flex-wrap gap-8">
                    {props.writeUpLink ? <Link href={props.writeUpLink} className="px-10 sm:px-16 py-2 rounded-lg bg-gradient-to-r from-mint to-mint-dark text-xl font-light transition hover:scale-105 ease-in-out duration-300">{"Read More"}</Link> : null}
                    <div className="rounded-lg bg-gradient-to-r from-mint to-mint-dark p-px flex items-center justify-center transition hover:scale-105 ease-in-out duration-300"><Link href={props.siteLink} className="bg-white px-12 sm:px-16 py-2 rounded-lg text-xl text-slate font-thin">{"View Site"}</Link></div>
                </div>
            </div>
            {isMobile? null : <div>
            <Carousel  className="pt-16" opts={{align: "start", loop: true, }} orientation="vertical" plugins={[plugin.current]}>
                    <CarouselContent className="h-[500px]">
                    {props.img1 ? <CarouselItem><Image className="max-w-full" src={props.img1.url} width={props.img1.width} height={props.img1.height} alt={props.img1.alt ? props.img1.alt : ""} /></CarouselItem> : null }
                    {props.img2 ? <CarouselItem><Image className="max-w-full" src={props.img2.url} width={props.img2.width} height={props.img2.height} alt={props.img2.alt ? props.img2.alt : ""} /></CarouselItem> : null }
                    {props.img3 ? <CarouselItem><Image className="max-w-full" src={props.img3.url} width={props.img3.width} height={props.img3.height} alt={props.img3.alt ? props.img3.alt : ""} /></CarouselItem> : null }
                    </CarouselContent>
                </Carousel>
            </div>}
        </div>
    )


}