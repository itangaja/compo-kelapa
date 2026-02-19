"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";

export function HeroSection() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const y = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);


    return (
        <section
            ref={ref}
            className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center md:px-6"
        >
            {/* Parallax Background */}
            <motion.div style={{ y }} className="absolute inset-0 z-0 will-change-transform">
                <Image
                    src="/images/bg.png"
                    alt="Coconut Plantation"
                    fill
                    className="object-cover object-center brightness-[0.5]"
                    priority
                />
            </motion.div>

            <div className="relative z-10 max-w-5xl space-y-8 px-4 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10">

                <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-lg">
                    CV WATAMPONE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                        GROUP
                    </span>
                </h1>

                <p className="mx-auto max-w-[800px] text-xl text-gray-200 md:text-2xl font-light drop-shadow-md">
                    Sourced from the finest plantations in Indonesia. We deliver sustainability, quality, and reliability in every shipment.
                </p>

                <div className="flex flex-col gap-5 sm:flex-row sm:justify-center pt-4">
                    <Button
                        size="lg"
                        asChild
                        className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white border-none shadow-xl transition-transform hover:scale-105"
                    >
                        <Link href="/products">
                            Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        asChild
                        className="h-14 px-10 text-lg bg-white/10 backdrop-blur-md text-white border-white/50 hover:bg-white/20 transition-transform hover:scale-105"
                    >
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>


        </section>
    );
}
