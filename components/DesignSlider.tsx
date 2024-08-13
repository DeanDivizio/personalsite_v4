"use client";
import * as React from "react"
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export default function DesignSlider() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false }))
    return(
        <div>
            <Carousel opts={{ align: "center", loop: true, }} plugins={[plugin.current]}>
                <CarouselContent className="flex flex-row items-center h-[300px] sm:h-[600px]">
                    <CarouselItem className="basis-full sm:basis-2/3 sm:pl-16"><Image className="max-w-full" src={"https://api.deandivizio.com/wp-content/uploads/2024/08/BarkPro2-1.webp"} width={2000} height={2000} alt={"Bark Productions Logo desisgn example"} /></CarouselItem>
                    <CarouselItem className="basis-2/3 sm:basis-2/4 sm:pl-16"><Image className="max-w-full" src={"https://api.deandivizio.com/wp-content/uploads/2024/08/Mohr_Newsletter_JAN23.webp"} width={612} height={792} alt={"Midwest Podiatry Centers newsletter design example"} /></CarouselItem>
                    <CarouselItem className="basis-full sm:basis-2/3 sm:pl-16"><Image className="max-w-full" src={"https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONELogo.webp"} width={2000} height={2000} alt={"OVRTONE Media Group logo design example"} /></CarouselItem>
                    <CarouselItem className="basis-full sm:basis-2/3 sm:pl-16"><Image className="max-w-full" src={"https://api.deandivizio.com/wp-content/uploads/2024/08/CronkhiteLogo.webp"} width={980} height={191} alt={"Cronkite Counsel logo design example"} /></CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}