"use client"

import { ActionButton } from "./action-button";
import BackgroundStars from "@/assets/stars.png";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

export function HeroSection() {

    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: [`start end`, 'end start']
    })
    const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <>
            <motion.section
                animate={{backgroundPositionX: BackgroundStars.width,}}
                transition={{duration: 120, repeat: Infinity, ease: 'linear'}}
                className={"h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"}
                style={{backgroundImage: `url(${BackgroundStars.src})`, backgroundPositionY}} ref={sectionRef}>
                <div className={"absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]"} />
                {/* Planet Logic */}
                <div className={"absolute size-64 md:size-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]"} />
                {/* Rings + Mini planets Logic */}
                <motion.div
                    style={{translateY: '-50%', translateX: '-50%',}}
                    animate={{rotate: '1turn'}}
                    transition={{duration: 60, repeat: Infinity, ease: 'linear'}}
                    className={"absolute size-[344px] md:size-[580px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}>
                    <div className={"absolute size-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"} />
                    <div className={"absolute size-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"} />
                    <div className={"absolute size-5 border border-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center"}>
                        <div className={"size-2 bg-white rounded-full"} />
                    </div>
                </motion.div>
                <motion.div
                    style={{translateY: '-50%', translateX: '-50%',}}
                    animate={{rotate: '-1turn'}}
                    transition={{duration: 60, repeat: Infinity, ease: 'linear'}}
                    className={"absolute size-[444px] md:size-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"} />
                <motion.div
                    style={{translateY: '-50%', translateX: '-50%',}}
                    animate={{rotate: '1turn'}}
                    transition={{duration: 90, repeat: Infinity, ease: 'linear'}}
                    className={"absolute size-[544px] md:size-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}>
                    <div className={"absolute size-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"}/>
                    <div className={"absolute size-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"}/>
                </motion.div>
                {/* Hero Section Content Logic */}
                <div className={"container relative mt-16"}>
                    <h1 className={"text-8xl md:text-[168px] md:leading-none font-semibold bg-white tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,0.5))] bg-clip-text text-transparent text-center"}>AI SEO</h1>
                    <p className={"text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center"}>Elevate your site&apos;s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
                    <div className={"flex justify-center mt-5"}>
                        <ActionButton label={"Join Waitlist"} />
                    </div>
                </div>
            </motion.section>
        </>
    )
}
