'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function BrandGuidelinesWidget() {
    return (
        <section className="relative min-h-screen bg-white py-16 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100"
                >
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">

                        {/* Left Side - Text Content (40%) */}
                        <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-blue-600 leading-tight">
                                Brand specific guidelines that help
                                <br />
                                you stay consistent across campaigns
                            </h2>
                            <p className="text-base lg:text-lg text-gray-600 max-w-md leading-relaxed">
                                Do/don'ts, banned claims, ICP hooks, competitor lines, versioned and diff-checked across teams and campaigns.
                            </p>
                        </motion.div>

                        {/* Right Side - Visual Container with Hub and Cards (60%) */}
                        <motion.div variants={fadeInUp} className="lg:col-span-3 relative">

                            {/* Gradient Border Container */}
                            <div
                                className="p-[2px] rounded-2xl"
                                style={{
                                    background: 'linear-gradient(135deg, #FF7F00 0%, #FF3202 15%, #FEE73E 30%, #1EFF00 50%, #0088FF 65%, #FF00F3 85%, #8700FF 100%)'
                                }}
                            >
                                <div className="bg-white rounded-[14px] p-6 relative min-h-[400px]">

                                    {/* Central Hub Icon */}
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg">
                                            <span className="text-white text-2xl">✦</span>
                                        </div>
                                    </div>

                                    {/* Connecting Lines SVG */}
                                    <svg
                                        className="absolute left-0 top-0 w-full h-full pointer-events-none"
                                        viewBox="0 0 400 400"
                                        fill="none"
                                    >
                                        {/* Line to Banned claims (top card) */}
                                        <path
                                            d="M 60 200 Q 120 130, 180 90"
                                            stroke="#EF4444"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        {/* Line to Do's and Don'ts (middle card) */}
                                        <path
                                            d="M 60 200 Q 130 200, 180 200"
                                            stroke="#F59E0B"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        {/* Line to Hooks (bottom card) */}
                                        <path
                                            d="M 60 200 Q 120 270, 180 310"
                                            stroke="#3B82F6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                    {/* Floating Cards - Stacked on Right */}
                                    <div className="ml-16 space-y-3">

                                        {/* Banned Claims Card - Red */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className="bg-white rounded-xl border border-red-200 shadow-sm p-4 hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                                                    <XCircle className="w-5 h-5 text-red-500" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-sm text-red-600">Banned claims</p>
                                                    <p className="text-xs text-gray-500">Officially recommended by legal team</p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Do's and Don'ts Card - Yellow/Amber */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="bg-white rounded-xl border border-amber-200 shadow-sm p-4 hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle className="w-5 h-5 text-amber-500" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-sm text-amber-700">Do's and Don'ts</p>
                                                    <p className="text-xs text-gray-500">Resolve all comments within 24 hrs.</p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Hooks Card - Blue */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="bg-white rounded-xl border border-blue-200 shadow-sm p-4 hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                                    <ArrowRight className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-sm text-blue-700">Hooks</p>
                                                    <p className="text-sm text-gray-600 leading-snug mt-1">
                                                        Efficient lead gen and proven ROI
                                                        <br />
                                                        Affordable scaling solutions
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>

    );
}