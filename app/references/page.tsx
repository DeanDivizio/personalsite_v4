import ReferenceLetterCard from "@/components/ReferenceLetterCard"
export default function ReferencesLanding() {

    return (
        <main>
            <div className="w-screen min-h-[98vh] flex flex-row justify-center items-start bg-gradient-to-br from-slate-dark to-black" >
                <div className="h-full backdrop-blur-sm  flex flex-col">
                    <div className="pt-36 md:pt-64 pb-24 md:pb-48 px-8 backdrop-blur-lg text-center flex flex-col justify-center">
                        <h1 className="text-6xl sm:text-8xl mb-6 font-semibold empTextDiv w-full py-2"><span className="empText text-center">{`References`}</span></h1>
                    </div>
                    <div className="flex flex-wrap gap-8 md:gap-12 px-4">
                        <ReferenceLetterCard
                            name="Alex Melelli"
                            initials="AM"
                            image={"https://api.deandivizio.com/wp-content/uploads/2024/11/AlexMelelli_Avatar.jpg"}
                            link={"/references/alexmelelli"}
                            subtitle="Co-Founder of OVRTONE Media Group"
                            isAlex
                        />
                        <ReferenceLetterCard
                            name="Doug McLiechey"
                            initials="DM"
                            image={"https://api.deandivizio.com/wp-content/uploads/2024/11/DougMcLiechey_Avatar.jpg"}
                            link={"/references/dougmcliechey"}
                            subtitle="CTO of Creative Path Solutions"
                        />
                        <ReferenceLetterCard
                            name="Sue Wolters"
                            initials="SW"
                            link={"/references/suewolters"}
                            subtitle="Supervising Manager at Einstein's Bagels"
                        />
                    </div>

                </div>
            </div>
        </main>
    )
}