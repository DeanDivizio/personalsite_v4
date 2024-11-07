import React from "react";

export default function BlogLandingPage() {
    return (
        <main>
            <div className="flex min-h-[50vh] flex-col items-center text-center lg:items-start lg:text-left justify-center overflow-x-hidden bg-barkpro-bg bg-cover">
                <div className="w-screen backdrop-blur-lg min-h-[50vh]">
                    <div id="barkHero" className="min-h-[50vh] px-36 flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-6xl mb-4 leading-[140%] sm:leading-normal">Blog</h1>
                        <h4 className="text-2xl font-extralight tracking-wide text-offWhite italic">{`Sometimes, I just feel like writing`}</h4>
                        <p>This is a work in progress.</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </main>
    )
}