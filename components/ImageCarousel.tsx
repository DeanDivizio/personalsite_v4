"use client"
import * as React from "react"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function ImageCarousel() {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnMouseEnter: true }))

    return (
        <Carousel className="pb-12" opts={{align: "center", loop: true, }} style={{maxWidth: '90%'}} plugins={[plugin.current]}>
            <CarouselContent style={{display: "flex", alignItems: 'center'}}>
                <CarouselItem className="basis-3/12 pl-8">
                    <Image src={'https://api.deandivizio.com/wp-content/uploads/2024/04/justinPortrait-cropped.jpg'} width={898} height={1123} alt=""/>
                </CarouselItem>
                <CarouselItem className="basis-3/12 pl-8">
                    <Image src={'https://api.deandivizio.com/wp-content/uploads/2024/02/IMG_6596-Edit-Large.jpeg'} width={1035} height={1280} alt=""/>
                </CarouselItem>
                <CarouselItem className="basis-3/12 pl-8">
                    <Image src={'https://api.deandivizio.com/wp-content/uploads/2024/02/IMG_6876-Large.jpeg'} width={853} height={1280} alt=""/>
                </CarouselItem >
                <CarouselItem className="basis-3/12 pl-8">
                    <Image src={'https://api.deandivizio.com/wp-content/uploads/2024/02/0P7A1871-Large.jpeg'} width={960} height={1280} alt=""/>
                </CarouselItem>
                <CarouselItem className="basis-3/12 pl-8">
                    <Image src={'https://api.deandivizio.com/wp-content/uploads/2024/02/0P7A1419-Large.jpeg'} width={853} height={1280} alt=""/>
                </CarouselItem>
                <CarouselItem className="basis-5/12 pl-8">
                    <Image src={'https://api.deandivizio.com/wp-content/uploads/2024/02/DSC05963-scaled.jpg'} width={2560} height={1870} alt=""/>
                </CarouselItem>
                <CarouselItem className="basis-6/12 pl-8">
                    <Image src={'https://api.deandivizio.com/wp-content/uploads/2024/02/DSC03877-Large.jpeg'} width={1280} height={791} alt=""/>
                </CarouselItem>
                <CarouselItem className="basis-3/12 pl-8">
                    <Image src={'https://api.deandivizio.com/wp-content/uploads/2024/02/DSC03521-scaled.jpg'} width={1707} height={2560} alt=""/>
                </CarouselItem>
                <CarouselItem className="basis-3/12 pl-8">
                    <Image src={'https://api.deandivizio.com/wp-content/uploads/2024/02/DSC00163-scaled.jpg'} width={1966} height={2560} alt=""/>
                </CarouselItem>
                <CarouselItem className="basis-5/12 pl-8">
                    <Image src={'https://api.deandivizio.com/wp-content/uploads/2024/02/0A3A8377-scaled.jpg'} width={2560} height={1805} alt=""/>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}