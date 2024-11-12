"use client";
import React, { useEffect, useState } from "react";
import ImageCarousel from "./ImageCarousel";
import styles from "./media.module.css"



export default function MediaSection() {

const [isToggled1, setToggle1] = useState(false);
const [isToggled2, setToggle2] = useState(false);
const [isToggled3, setToggle3] = useState(false);


const handleClick = () => { // function to handle the toggling of the media sub-sections. #1 just handles the button. #2 handles styles for the photo section. #3 handles the sytles for the video section and the conditional rendering
 setToggle1(!isToggled1);
 if (isToggled1) {
   setToggle3(!isToggled3);
   setTimeout(() => {
     setToggle2(!isToggled2);
   }, 200);
 } else {
   setToggle2(!isToggled2);
   setTimeout(() => {
     setToggle3(!isToggled3);
   }, 200);
 }
};

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

    return (
        <div id="media" className="min-h-screen w-screen flex flex-col justify-start items-center pt-24 sm:pt-32 pb-32 darkGeoBG"> {/* below components are animated in conditionally if not on mobile */}
            <h2 className="text-6xl font-semibold mb-4">Media</h2>
            <div className={styles.headingSection}>
              
              <div className={styles.toggleContainer} onClick={handleClick}>
                <div className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl z-10" style={{ color: isToggled1 ? '#000000' : '#0073ff', fontWeight: isToggled1 ? '200' : '200', opacity: isToggled1 ? '0.65' : '1' }}>Photo</div>
                <div className={`${styles.toggleButton} ${isToggled1 ? styles.active : ''}`}></div>
                <div className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl z-10" style={{ color: isToggled1 ? '#0073ff' : '#000000', fontWeight: isToggled1 ? '200' : '200', opacity: isToggled1 ? '1' : '0.65' }}>Video</div>
              </div>
            </div>
            <div className={styles.mediaContainer}>
              {!isToggled3 &&
                <div className={styles.photoSection} style={{ opacity: isToggled2 ? '0' : '1', transform: isToggled2 ? 'scale(0.9)' : 'scale(1)' }}>
                  <ImageCarousel />
                </div>}
              {isToggled3 &&
                <div className={styles.videoSection} style={{ opacity: isToggled3 ? '1' : '0', transform: isToggled3 ? 'scale(1)' : 'scale(0.9)' }}>
                  <iframe className="max-w-full" 
                      style={isMobile ? {width: "90vw", height: '50vw'} : {width: "60vw", height: '33.75vw'}}
                      src="https://www.youtube.com/embed/qfta1fxUI7Q?si=iCKkEaUoYEOXeUW4?vq=1080" 
                      title="My Reel | Spring 2024" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen>
                    </iframe> 
                </div>}
            </div>
          </div>
    )

}