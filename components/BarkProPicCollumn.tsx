"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";

export default function OVRTONEPicColumn() {
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
        if (width < 801 && !isMobile) {
            setIsMobile(true);
        } else if (width >= 801 && isMobile) {
            setIsMobile(false);
        }
    }, [width, isMobile]);

    return(
        <div className="pt-8 lg:pt-24 order-1 lg:order-2">
            <Image className="max-w-[90%] sm:max-w-[66%] inline-block ml-4 mr-4 md:ml-28 lg:ml-64 lg:mr-64 mb-24" src={"https://api.deandivizio.com/wp-content/uploads/2024/08/BarkPro1.webp"} width={2000} height={1000} alt="Bark Productions site " />
            {!isMobile ? <Image className="max-w-[66%] inline-block ml-4 mr-4 md:ml-28 lg:ml-64 lg:mr-64" src={"https://api.deandivizio.com/wp-content/uploads/2024/08/BarkPro2.webp"} width={2000} height={1000} alt="Bark Productions site" /> : null}
        </div>
    )
}