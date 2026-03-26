// src/components/layout/Navigation.tsx
'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image from 'next/image';
import { useModalStore } from '@/store/modalStore'


export default function Navigation() {
    const openModal = useModalStore((state) => state.openModal)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<string>('Product');

    const navItems = ['Product', 'AI Features', 'Why Grandeur', 'FAQ'];

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4"
        >
            <div className="max-w-5xl mx-auto rounded-full p-[1.5px] sm:p-[2px] relative overflow-hidden">
                <div className="absolute inset-[-200%] animate-spin-slow bg-[conic-gradient(from_0deg,#ef4444,#f59e0b,#22c55e,#3b82f6,#a855f7,#ef4444)] blur-[15px] sm:blur-[20px] opacity-70 sm:opacity-80" />

                <div className="relative bg-white/90 backdrop-blur-xl rounded-full px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-lg border border-white/40">

                    {/* Logo */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl overflow-hidden shadow-md bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                            <Image
                                src="/my_logo.png"
                                alt="Grandeur Logo"
                                width={40}
                                height={40}
                                className="w-7 h-7 sm:w-10 sm:h-10 object-cover"
                                priority
                            />
                        </div>

                    </div>

                    {/* Desktop Navigation - Increased font size */}
                    <div className="hidden md:flex items-center gap-8 text-base font-medium text-gray-700">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                onClick={() => setActiveItem(item)}
                                className={`relative group cursor-pointer transition-colors duration-300 ${activeItem === item ? 'text-[#0088FF]' : 'text-gray-700'
                                    }`}
                            >
                                <span className={`relative z-10 transition-all duration-300 ${activeItem === item
                                    ? 'text-[#0088FF]'
                                    : 'group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:via-orange-500 group-hover:to-amber-600'
                                    }`}>
                                    {item}
                                </span>

                                {/* Underline - expands from center */}
                                <span className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ease-out rounded-full ${activeItem === item
                                    ? 'w-full bg-[#0088FF]'
                                    : 'w-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 group-hover:w-full'
                                    }`} />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-2">
                        {/* Desktop CTA Button - Professional hover effect */}
                        <div className="hidden md:block">
                            <button
                                onClick={openModal}
                                className="relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 group bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-blue-500/30 hover:shadow-xl hover:scale-105 animate-bounce"
                                style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
                            >
                                {/* Glitter particles */}
                                <span className="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDuration: '1.5s' }} />
                                <span className="absolute top-1/3 left-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                                <span className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDuration: '1.8s', animationDelay: '0.3s' }} />

                                {/* Shimmer effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

                                {/* Sparkle overlay */}
                                <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse" />

                                {/* Button text */}
                                <span className="relative z-10">Join waitlist</span>
                            </button>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden mt-2 mx-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                >
                    <div className="px-6 py-6 space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={() => {
                                    setActiveItem(item);
                                    setMobileMenuOpen(false);
                                }}
                                className={`block py-3 text-lg font-medium transition-colors border-b border-gray-50 last:border-0 ${activeItem === item
                                    ? 'text-[#0088FF]'
                                    : 'text-gray-700 hover:text-[#0088FF]'
                                    }`}
                            >
                                {item}
                            </a>
                        ))}

                        {/* Mobile CTA Button - Framer Motion */}
                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.35)" }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-full overflow-hidden rounded-full py-3 mt-4 text-base font-semibold text-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600"
                        >
                            <motion.span
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            />
                            <span className="relative z-10">Join waitlist</span>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}