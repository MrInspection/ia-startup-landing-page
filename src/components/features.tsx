"use client"
import {DotLottiePlayer} from "@dotlottie/react-player";
import ProductImage from "@/assets/product-image.png";
import Image from "next/image";

const tabs = [
    {
        icon: "/assets/lottie/vroom.lottie",
        title: "User-friendly dashboard",
        isNew: false,
        backgroundPositionX: 0,
        backgroundPositionY: 0,
        backgroundSizeX: 150,
    },
    {
        icon: "/assets/lottie/click.lottie",
        title: "One-click optimization",
        isNew: false,
        backgroundPositionX: 98,
        backgroundPositionY: 100,
        backgroundSizeX: 135,
    },
    {
        icon: "/assets/lottie/stars.lottie",
        title: "Smart keyword generator",
        isNew: true,
        backgroundPositionX: 100,
        backgroundPositionY: 27,
        backgroundSizeX: 177,
    },
]

export function Features() {
    return (
        <>
            <section className={"py-20 md:py-24"}>
                <div className={"container"}>
                    <h2 className={"text-5xl md:text-6xl font-medium text-center tracking-tighter"}>Elevate your SEO efforts.</h2>
                    <p className={"text-white/70 text-lg md:text-xl max-w-2xl mx-auto text-center tracking-tight mt-5"}>From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.</p>

                    <div className={"mt-10 grid lg:grid-cols-3 gap-3"}>
                        {tabs.map((tab, index) => (
                            <div key={index} className={"border border-muted flex items-center p-2.5 gap-2.5 rounded-xl"}>
                                <div className={"size-12 border border-muted rounded-lg inline-flex items-center justify-center"}>
                                    <DotLottiePlayer
                                        src={tab.icon}
                                        autoplay className={"size-5"}
                                    />
                                </div>
                                <div className={"font-medium"}>{tab.title}</div>
                                {tab.isNew && <div className={"text-xs rounded-full text-white px-2 py-0.5 bg-[#8c44ff] font-semibold"}>New</div>}
                            </div>
                        ))}
                    </div>
                    <div className={"border border-muted rounded-xl p-2.5 mt-3"}>
                        <div
                            className={"aspect-video bg-cover border border-muted rounded-lg"}
                            style={{backgroundImage: `url(${ProductImage.src})`}}>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
