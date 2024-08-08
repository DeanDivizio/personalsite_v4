"use client";
import React, {useState} from "react";
import Image from "next/image";

export default function OVRTONEPicColumn() {
   
    const [isMobile, setIsMobile] = useState(false);
    if (typeof window && window.innerWidth < 768) { setIsMobile(true) };

    return(
        <div className="pt-24">
            <Image className="max-w-[66%] inline-block ml-64 mr-64 mb-24" src={"https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONE1.webp"} width={2000} height={1000} alt="OVRTONE Media Group site " />
            {!isMobile ? <Image className="max-w-[66%] inline-block ml-64 mr-64" src={"https://api.deandivizio.com/wp-content/uploads/2024/08/OVRTONE2.webp"} width={2000} height={1000} alt="OVRTONE Media Group site" /> : null}
        </div>
    )
}