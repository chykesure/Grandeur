// src/components/hero/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PersonaCard from './PersonaCard';
import Cloud from './Cloud';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Image from 'next/image';

const personas = [
    { image: '/campaign_manager.png', label: 'Campaign Manager' },
    { image: '/ad_specialist.png', label: 'Ad specialist' },
    { image: '/solo_preneur.png', label: 'Solo-preneur' },
    { image: '/marketing_consult.png', label: 'Marketing Consultant' },
    { image: '/head_of_marketing.png', label: 'Head of Marketing' },
    { image: '/vp_marketing.png', label: 'VP of marketing' },
];

export default function HeroSection() {
    return (
        <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-30 lg:pt-35 pb-12 md:pb-16 overflow-hidden bg-[#62b8eb]">

            {/* Video Background */}
            <video
                src="/sky.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
            />

            {/* Fade Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-[#62b8eb]/50 via-transparent to-[#62b8eb]/70" />

            {/* Moving Clouds */}
            <div className="absolute inset-0 z-10">
                <Cloud top="8%" duration={65} delay={0} scale={1.1} opacity={0.65} />
                <Cloud top="18%" duration={85} delay={8} scale={0.85} opacity={0.75} />
                <Cloud top="12%" duration={55} delay={18} scale={1.3} opacity={0.6} />
                <Cloud top="28%" duration={75} delay={5} scale={0.95} opacity={0.8} />
                <Cloud top="35%" duration={95} delay={25} scale={1.2} opacity={0.55} />
                <Cloud top="48%" duration={70} delay={12} scale={0.8} opacity={0.7} />
                <Cloud top="65%" duration={80} delay={30} scale={1.15} opacity={0.65} />
                <Cloud top="78%" duration={60} delay={15} scale={0.9} opacity={0.75} />
            </div>

            {/* Sun Logo - Optimized for Mobile (Lower & Cleaner) */}
            <div className="absolute top-24 left-5 sm:top-20 sm:left-6 md:top-8 md:left-8 lg:left-16 z-30">
                <motion.div
                    animate={{ rotate: 360, y: [0, -12, 0] }}
                    transition={{
                        rotate: { duration: 90, repeat: Infinity, ease: "linear" },
                        y: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                >
                    <Image
                        src="/logo.png"
                        alt="Grandeur Sun Logo"
                        width={280}
                        height={280}
                        className="w-32 sm:w-28 md:w-36 lg:w-44 xl:w-52"
                        priority
                    />
                </motion.div>
            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-20 w-full px-5 sm:px-6 md:px-8 lg:px-16 pt-20 md:pt-32 lg:pt-20">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-center lg:items-start">

                    {/* Left Content - Text - Pushed down nicely on all devices */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="w-full lg:col-span-7 space-y-6 md:space-y-8 lg:space-y-10 pt-16 sm:pt-20 md:pt-12 lg:pt-8"
                    >
                        <motion.div variants={fadeInUp}>
                            <h1 className="text-[2.65rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tighter">
                                {/* Mobile: Force pairs together | Desktop: Natural wrapping */}
                                <span className="whitespace-nowrap sm:whitespace-normal inline">
                                    <span className="text-[#2346A6]">Your entire</span>{" "}
                                    <span className="text-[#0088FF]">marketing</span>
                                </span>{" "}
                                <span className="whitespace-nowrap sm:whitespace-normal inline">
                                    <span className="italic font-serif font-medium text-[#0088FF]">operations</span>{" "}
                                    <span className="italic font-serif font-medium text-[#2346A6]">orchestrated</span>
                                </span>
                            </h1>
                        </motion.div>

                        {/* "with AI" Box */}
                        <motion.div variants={fadeInUp} className="relative inline-block">
                            <div className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500 sm:-top-3 sm:-left-3 sm:w-4 sm:h-4 sm:border-t-[3px] sm:border-l-[3px]" />
                            <div className="absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 border-blue-500 sm:-top-3 sm:-right-3 sm:w-4 sm:h-4 sm:border-t-[3px] sm:border-r-[3px]" />
                            <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 border-blue-500 sm:-bottom-3 sm:-left-3 sm:w-4 sm:h-4 sm:border-b-[3px] sm:border-l-[3px]" />
                            <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-blue-500 sm:-bottom-3 sm:-right-3 sm:w-4 sm:h-4 sm:border-b-[3px] sm:border-r-[3px]" />

                            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl">
                                with AI
                            </div>
                        </motion.div>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg sm:text-xl md:text-2xl text-slate-800/90 max-w-2xl leading-relaxed font-medium"
                        >
                            Plan, generate, approve, and publish across every channel from one calendar and one canvas.
                            Grandeur turns brand guardrails into output at scale.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
                        >
                            {/* Primary Button - Bouncing */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatDelay: 0.5
                                }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-[#0088FF] via-[#43A8FF] to-[#0379E0] hover:opacity-90 text-white px-8 py-7 rounded-2xl text-xl font-bold shadow-xl transition-all active:scale-[0.97] w-full sm:w-auto"
                                >
                                    Join the waitlist
                                </Button>
                            </motion.div>

                            {/* Secondary Button - Bouncing with delay */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.3,
                                    repeatDelay: 0.5
                                }}
                                className="p-[3px] rounded-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 shadow-lg w-full sm:w-auto"
                            >
                                <Button
                                    size="lg"
                                    className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-7 rounded-[14px] text-xl font-bold flex items-center justify-center gap-3 w-full"
                                >
                                    <Play className="w-6 h-6 fill-blue-500 text-blue-500" />
                                    Watch the 90-sec explainer
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Persona Cards with Marquee Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:col-span-5 flex justify-center lg:justify-start pt-8 lg:pt-0 overflow-hidden"
                    >
                        <div className="grid grid-cols-2 gap-x-6 gap-y-8 w-full max-w-[480px] lg:max-w-[520px]">

                            {/* Left Column - Scrolls Up */}
                            <div className="relative h-[600px] overflow-hidden">
                                <div className="flex flex-col gap-6 animate-marquee-up">
                                    <PersonaCard image="/campaign_manager.png" label="Campaign Manager" />
                                    <PersonaCard image="/solo_preneur.png" label="Solo-preneur" />
                                    <PersonaCard image="/head_of_marketing.png" label="Head of Marketing" />
                                    {/* Duplicate for seamless loop */}
                                    <PersonaCard image="/campaign_manager.png" label="Campaign Manager" />
                                    <PersonaCard image="/solo_preneur.png" label="Solo-preneur" />
                                    <PersonaCard image="/head_of_marketing.png" label="Head of Marketing" />
                                </div>
                            </div>

                            {/* Right Column - Scrolls Down */}
                            <div className="relative h-[600px] overflow-hidden pt-10">
                                <div className="flex flex-col gap-6 animate-marquee-down">
                                    <PersonaCard image="/ad_specialist.png" label="Ad specialist" />
                                    <PersonaCard image="/marketing_consult.png" label="Marketing Consultant" />
                                    <PersonaCard image="/vp_marketing.png" label="VP of marketing" />
                                    {/* Duplicate for seamless loop */}
                                    <PersonaCard image="/ad_specialist.png" label="Ad specialist" />
                                    <PersonaCard image="/marketing_consult.png" label="Marketing Consultant" />
                                    <PersonaCard image="/vp_marketing.png" label="VP of marketing" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}