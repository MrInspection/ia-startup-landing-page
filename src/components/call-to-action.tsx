import {ActionButton} from "@/components/action-button";
import BackgroundStars from "@/assets/stars.png";
import BackgroundGrid from "@/assets/grid-lines.png";

export function CallToAction() {
    return (
        <>
            <section className={"py-20 md:py-24"}>
                <div className={"container"}>
                    <div className={"border border-muted py-24 px-6 rounded-xl overflow-hidden relative"} style={{backgroundImage: `url(${BackgroundStars.src})`}}>
                        <div className={"absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"} style={{backgroundImage: `url(${BackgroundGrid.src})`}}/>
                        <div className={"relative"}>
                            <h2 className={"text-5xl tracking-tighter text-center font-medium"}>
                                AI-driven SEO for everyone
                            </h2>
                            <p className={"text-center text-lg md:text-xl text-white/70 tracking-tight px-4 mt-5"}>
                                Achieve clear, impactful results without the complexity.
                            </p>
                            <div className={"flex justify-center mt-8"}>
                                <ActionButton label={"Join Waitlist for Early Access"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
