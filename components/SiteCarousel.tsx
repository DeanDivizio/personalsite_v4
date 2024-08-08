"use client"
import React, { useState, useEffect } from "react";
import SiteExampleSlate from "./SiteExampleSlate";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";

export default function SiteCarousel() {

    const [isMobile, setIsMobile] = useState(false);
    const [width, setWidth] = useState(0);
    

    useEffect(() => {
        // Check if window is defined (i.e., client-side rendering)
        if (typeof window !== 'undefined') {
            // Set the initial width on component mount
            setWidth(window.innerWidth);

            // Add a resize event listener to update width
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            // Clean up the event listener on unmount
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount

    useEffect(() => {
        if (width < 768 && !isMobile) {
            setIsMobile(true);
        } else if (width >= 768 && isMobile) {
            setIsMobile(false);
        }
    }, [width, isMobile]);

    return(
        <div className="flex flex-row items-center justify-center max-w-[80vw] pb-32" >
            <Carousel opts={{ align: "start", loop: true, }}>
              <CarouselContent className="h-[95vh] sm:h-[550px] w-[80vw] ">
                <CarouselItem className="mt-8 sm:mt-auto">
                  <SiteExampleSlate
                    heading="OVRTONE Media Group"
                    tech="Next.js, WordPress, AWS, Sendgrid"
                    body={isMobile ? "OVRTONE Media Group is a media production and design company with the goal of helping local businesses. It's ran as a side project by myself and my business partner, Alex. <br><br>Our goals in this redesign were strike a balance between unique, artistic, and media-focused; and easy to use, accessible, and minimalistic. We wanted to execute our brand image and showcase our work in a way that feels natural." : "OVRTONE Media Group is a media production and design company with the goal of helping local businesses. It's ran as a side project by myself and my business partner, Alex. <br><br>Our goals in this redesign were strike a balance between unique, artistic, and media-focused; and easy to use, accessible, and minimalistic. We wanted to execute our brand image and showcase our work in a way that feels natural. <br> <br>In the end, we landed on a site that's unique enough to feel personable, while using enough common design patterns to feel immediately familiar."}
                    writeUpLink="/work/ovrtone"
                    siteLink="https://www.ovrtonemedia.com"
                    img1={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONE1.webp", width: 2000, height: 1000 }}
                    img2={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONE2.webp", width: 2000, height: 1000 }}
                    img3={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONE3.webp", width: 2000, height: 1000 }} />
                </CarouselItem>
                <CarouselItem className="mt-32 sm:mt-auto">
                  <SiteExampleSlate
                    heading="Capital Podiatry"
                    tech="Wordpress"
                    body="Originally designed and built by me, this is a great example of a modern, airy, and light feeling site. The client's goals were to make it simple, inviting, and direct, so that users felt compforatble while also having clear CTAs wherever possible. <br><br>
                              While no longer maintained by me, enough of my original design is still present to warrant checking it out if you're interested."
                    siteLink="https://capitalfeel.com"
                    img1={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/CapitalPod1.webp", width: 2000, height: 1000 }}
                    img2={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/CapitalPod2.webp", width: 2000, height: 1000 }}
                  />
                </CarouselItem>
                <CarouselItem>
                    <SiteExampleSlate
                    heading="Bark Productions"
                    tech="Next.js, WordPress"
                    body="Bark Productions is a live events company in the the Chicagoland area. The owner approached me wanting a site that essentially acted as a half digital business card and half showcase of prior projects. <br><br>
                                While the bulk of the site is built on Next.js, it uses WordPress as a CMS to allow the client to easily update content on his own - which was a core requirement of this project. <br><br>
                                You can read more about his site, as well as the design of his brand overall below."
                    writeUpLink="/work/barkproductions"
                    siteLink="https://www.barkpro.live"
                    img1={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/BarkPro1.webp", width: 2000, height: 1000 }}
                    img2={{ url: "https://api.deandivizio.com/wp-content/uploads/2024/08/BarkPro2.webp", width: 2000, height: 1000 }} />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
    )
}