// src/components/features/CalenderWidget.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Calendar, Clock, AlertCircle, CheckCircle2, Plus, ChevronLeft, ChevronRight, Send, Target, Zap, Pencil, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useModalStore } from '@/store/modalStore'

import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const calendarEvents = [
    { day: 8, title: 'Discovery call with Tania Smith', color: 'bg-green-500', time: '10:00 AM' },
    { day: 12, title: 'Meta & TikTok ads fail', color: 'bg-orange-500', time: '2:30 PM' },
    { day: 15, title: 'Brandguard conflict', color: 'bg-blue-500', time: '11:00 AM' },
    { day: 22, title: 'Campaign review', color: 'bg-purple-500', time: '3:00 PM' },
    { day: 28, title: 'Content deadline', color: 'bg-red-500', time: '5:00 PM' },
];


const templateNodes = [
    { id: 1, label: 'Research', color: 'bg-blue-500', position: 'top-0 left-1/2 -translate-x-1/2' },
    { id: 2, label: 'Strategy', color: 'bg-indigo-500', position: 'top-16 left-8' },
    { id: 3, label: 'Content', color: 'bg-purple-500', position: 'top-16 right-8' },
    { id: 4, label: 'Schedule', color: 'bg-pink-500', position: 'top-32 left-1/2 -translate-x-1/2' },
    { id: 5, label: 'Analytics', color: 'bg-green-500', position: 'top-48 left-1/2 -translate-x-1/2' },
];

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);

const frameworks = [
    { name: 'Template X', color: 'bg-blue-500', active: true },
    { name: 'Blueprint IV', color: 'bg-orange-500', active: false },
    { name: 'New blueprint', color: 'bg-gray-400', active: false },
];


export default function CalenderWidget() {

    const isModalOpen = useModalStore((state) => state.isModalOpen)
    const closeModal = useModalStore((state) => state.closeModal)
    const openModal = useModalStore((state) => state.openModal)

    // ============================================
    // STEP 1: Add useState HERE (inside component, at the top)
    // ============================================
    const [timeLeft, setTimeLeft] = useState({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    // ============================================
    // STEP 2: Add useEffect HERE (after useState, before return)
    // ============================================
    useEffect(() => {
        const launchDate = new Date('2026-03-31T23:59:59')

        const calculateTimeLeft = () => {
            const now = new Date()
            const diff = launchDate.getTime() - now.getTime()

            if (diff > 0) {
                const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24))
                setTimeLeft({
                    months: Math.floor(totalDays / 30),
                    days: totalDays % 30,
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / (1000 * 60)) % 60),
                    seconds: Math.floor((diff / 1000) % 60)
                })
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)
        return () => clearInterval(timer)
    }, [])

    const [selectedFramework, setSelectedFramework] = useState('template-x');

    return (
        <section
            className="relative min-h-screen bg-transparent py-16 md:py-24"
            style={{
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="text-center max-w-6xl mx-auto mb-16 md:mb-24 "
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
                    ><span className="text-[#2346A6]">One interface, every marketing task</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-[#8D8D8D] max-w-3xl mx-auto mb-8 leading-relaxed"
                    >
                        Stop jumping between disconnected tools. Grandeur brings your entire marketing workflow from research and strategy to creation, scheduling,
                        and reporting into one beautifully simple interface.
                    </motion.p>

                    <motion.div variants={fadeInUp}>
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatDelay: 0.5
                            }}
                        >
                            <Button
                                size="lg"
                                onClick={openModal} // Add this line
                                className="bg-gradient-to-r from-[#0088FF] via-[#43A8FF] to-[#0379E0] hover:opacity-90 text-white px-8 py-6 rounded-xl text-lg font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105"
                            >
                                Join the waitlist
                                <span className="ml-2 text-blue-100">(save 40%)</span>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Content Calendar Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24 shadow-xl border border-gray-200 p-6 md:p-9 rounded-2xl bg-white/5"
                    style={{
                        width: '95vw',        // How much of the screen width you want (95% here)
                        position: 'relative',
                        left: '50%',
                        right: '50%',
                        marginLeft: '-47.5vw', // This must be EXACTLY half of your width (95 / 2 = 47.5)
                        marginRight: '-47.5vw'
                    }}
                >
                    {/* Left - Text Content */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            <span className="text-[#0088FF]">Successful campaigns with an AI powered Content Calendar</span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Plan Month/Week/Day across channels; conflict alerts, bulk approvals, auto-UTMs, and retries for failed posts.
                        </p>
                    </motion.div>

                    {/* Right - Calendar Widget */}
                    <motion.div variants={fadeInUp} className="relative">
                        {/* Outer gradient border */}
                        <div
                            className="p-[2px] rounded-2xl overflow-hidden"
                            style={{
                                background: 'linear-gradient(90deg, #FF7F00 0%, #FF3202 15.11%, #FEE73E 29.33%, #1EFF00 48.56%, #0088FF 62.5%, #FF00F3 90.87%, #8700FF 100%)'
                            }}
                        >
                            {/* Top Bar */}
                            <div className="px-4 md:px-5 py-3 flex items-center justify-between border-b border-gray-100 bg-gray-50/80">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-500">GMT+1 Berlin, Germany</span>
                                </div>
                                <div className="text-lg font-semibold text-gray-900">
                                    8:12<span className="text-xs font-normal text-gray-500 ml-0.5">am</span>
                                </div>
                            </div>

                            {/* Main Content - Stack on mobile, side-by-side on larger screens */}
                            <div className="bg-white flex flex-col lg:flex-row">

                                {/* Calendar Panel */}
                                <div className="lg:w-1/2 p-5 border-b lg:border-b-0 lg:border-r border-gray-100">
                                    {/* Month Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                                            <ChevronLeft className="w-4 h-4 text-gray-600" />
                                        </button>
                                        <span className="font-semibold text-gray-900 text-base">October 2025</span>
                                        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                                            <ChevronRight className="w-4 h-4 text-gray-600" />
                                        </button>
                                    </div>

                                    {/* Weekdays */}
                                    <div className="grid grid-cols-7 gap-px mb-1">
                                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                                            <div
                                                key={idx}
                                                className="text-center text-xs font-medium text-gray-400 py-1"
                                            >
                                                {day}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Calendar Days - More flexible sizing */}
                                    <div className="grid grid-cols-7 gap-1">
                                        {[...Array(5)].map((_, i) => (  // Adjust empty slots as needed
                                            <div key={`empty-${i}`} className="aspect-square" />
                                        ))}

                                        {monthDays.map((day) => {
                                            const isToday = day === 5; // Matching your screenshot (Oct 5 highlighted)
                                            return (
                                                <div
                                                    key={day}
                                                    className={`aspect-square flex items-center justify-center text-sm font-medium rounded-full cursor-pointer transition-all
                    ${isToday
                                                            ? 'bg-blue-500 text-white shadow-md'
                                                            : 'text-gray-700 hover:bg-gray-100'
                                                        }
                  `}
                                                >
                                                    {day}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Events Panel */}
                                <div className="lg:w-1/2 p-5 md:p-6 flex flex-col">
                                    {/* Selected Date */}
                                    <div className="mb-5">
                                        <span className="font-semibold text-gray-900">Fri, Oct 5</span>
                                    </div>

                                    {/* Events */}
                                    <div className="space-y-4 flex-1">
                                        {/* Event 1 - Discovery Call */}
                                        <div className="bg-[#EBFAF5] rounded-2xl p-4 border border-emerald-100 border-l-4 border-l-emerald-500">
                                            <p className="font-medium text-gray-900">Discovery call with Tanja Smith</p>
                                            <p className="text-sm text-gray-500 mt-1">9am - 9:30am</p>
                                        </div>

                                        {/* Event 2 - Failed Ads */}
                                        <div className="bg-[#FFF2EC] rounded-2xl p-4 border border-orange-100 border-l-4 border-l-orange-500">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                                <div className="flex-1">
                                                    <p className="font-medium text-gray-900">Meta & TikTok ads fail</p>
                                                    <div className="flex items-center gap-2 mt-3">
                                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                            </svg>
                                                        </div>
                                                        <div className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center">
                                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                            </svg>
                                                        </div>
                                                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-5 py-2 rounded-xl transition-colors whitespace-nowrap self-start">
                                                    Retry
                                                </button>
                                            </div>
                                        </div>

                                        {/* Event 3 - Brandguard Conflict */}
                                        <div className="bg-[#E9F6FF] rounded-2xl p-4 border border-blue-100 border-l-4 border-l-[#0088FF]">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                                <div>
                                                    <p className="font-medium text-gray-900">Brandguard conflict</p>
                                                    <p className="text-sm text-gray-500 mt-1">10:12am</p>
                                                </div>
                                                <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-5 py-2 rounded-xl transition-colors whitespace-nowrap self-start">
                                                    Resolve now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-center mb-16 md:mb-24 shadow-xl border border-gray-200 p-6 md:p-9 rounded-2xl bg-white/5"
                    style={{
                        width: '95vw',
                        position: 'relative',
                        left: '50%',
                        right: '50%',
                        marginLeft: '-47.5vw',
                        marginRight: '-47.5vw'
                    }}
                >
                    {/* Connecting Lines SVG - adjusted for 3-column layout */}
                    <svg
                        className="absolute -left-47 top-0 w-full h-full pointer-events-none hidden md:block"
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

                    {/* Left - Frameworks Panel */}
                    <motion.div variants={fadeInUp}>
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Frameworks</h3>

                            <div className="space-y-3 mb-6">
                                {frameworks.map((framework, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setSelectedFramework(framework.name)}
                                        className="flex items-center gap-3 cursor-pointer group"
                                    >
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                            ${selectedFramework === framework.name
                                                ? 'border-blue-500 bg-blue-500'
                                                : 'border-gray-300 bg-white group-hover:border-gray-400'
                                            }`}
                                        >
                                            {selectedFramework === framework.name && (
                                                <div className="w-2 h-2 rounded-full bg-white" />
                                            )}
                                        </div>
                                        <span className={`font-medium transition-colors
                            ${selectedFramework === framework.name ? 'text-gray-900' : 'text-gray-600'}
                        `}>
                                            {framework.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <button
                                    className="flex-1 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all hover:opacity-90 hover:scale-[1.02]"
                                    style={{
                                        background: 'linear-gradient(90deg, #0088FF 0%, #43A8FF 54.66%, #0379E0 100%)'
                                    }}
                                >
                                    Send to calendar
                                </button>
                                <button
                                    className="flex-1 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all hover:opacity-90 hover:scale-[1.02]"
                                    style={{
                                        background: 'linear-gradient(90deg, #2EBC4E 0%, #34E85C 54.66%, #2EBC4E 100%)'
                                    }}
                                >
                                    Ads testing
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="relative md:left-20 flex flex-col gap-5 w-full max-w-md mx-auto md:mx-0"
                    >
                        <div className="bg-white rounded-xl border-2 border-orange-400 shadow-sm p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Template X</h3>

                            <div className="space-y-6">
                                {/* 1. Brandguard check complete */}
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-600">Brandguard check complete</span>
                                </div>

                                {/* Scorecard section */}
                                <div>
                                    <h4 className="text-base font-semibold text-gray-900 mb-3">Scorecard</h4>
                                    <div className="space-y-4">
                                        {/* Brandguard colors */}
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm text-gray-600">Brandguard colors</span>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-900">10/10</span>
                                        </div>

                                        {/* Brand tone */}
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                                                    <span className="text-white text-[13px] font-bold leading-none mt-px">i</span>
                                                </div>
                                                <span className="text-sm text-gray-600">Brand tone</span>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-900">7/10</span>
                                        </div>

                                        {/* Banned claims */}
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm text-gray-600">Banned claims</span>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-900">4/10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Text Content */}
                    <motion.div variants={fadeInUp} className="space-y-5">
                        <h2 className="text-xl md:text-2xl font-bold text-blue-600 leading-tight">
                            Max out your best ideas with
                            <br />
                            <span className="text-blue-600">Frameworks and Template Nodes</span>
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Reusable frameworks with BrandGuard checks and scorecards. One click to send variants to Calendar or Ads testing.
                        </p>
                    </motion.div>
                </motion.div>


                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24 shadow-xl border border-gray-200 p-6 md:p-9 rounded-2xl bg-white"
                    style={{
                        width: '95vw',
                        position: 'relative',
                        left: '50%',
                        right: '50%',
                        marginLeft: '-47.5vw',
                        marginRight: '-47.5vw'
                    }}
                >
                    {/* Column 1 - Left: Text Content */}
                    <motion.div variants={fadeInUp} className="space-y-6 relative ml-auto mr-27">
                        <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-blue-600 leading-tight">
                            Brand specific guidelines that help
                            <br />
                            you stay consistent across campaigns
                        </h2>
                        <p className="text-base lg:text-lg text-gray-500 max-w-md leading-relaxed">
                            Do/don't's, banned claims, ICP hooks, competitor lines, versioned and diff-checked across teams and campaigns.
                        </p>
                    </motion.div>

                    {/* Column 2 - Right: Hub Icon + Cards Container */}
                    <motion.div variants={fadeInUp} className="relative ml-auto mr-27">
                        {/* Gradient Border Container */}
                        <div
                            className="p-[2px] rounded-2xl w-full max-w-md"
                            style={{
                                background: 'linear-gradient(135deg, #FF7F00 0%, #FF3202 15%, #FEE73E 30%, #1EFF00 50%, #0088FF 65%, #FF00F3 85%, #8700FF 100%)'
                            }}
                        >
                            <div className="bg-white rounded-[14px] p-6 relative min-h-[360px]">

                                {/* Central Hub Icon - positioned on left side inside the container */}
                                <div className="absolute -left-40 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                                    <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                                        <Image
                                            src="/my_logo.png"
                                            alt="Grandeur Logo"
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 object-cover"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Connecting Lines SVG */}
                                <svg
                                    className="absolute -left-38 top-0 w-full h-full pointer-events-none z-0 hidden md:block"
                                    viewBox="0 0 400 400"
                                    fill="none"
                                >
                                    {/* Line to Banned claims (top card) */}
                                    <path
                                        d="M 20 200 Q 80 130, 140 80"
                                        stroke="#EF4444"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    {/* Line to Do's and Don'ts (middle card) */}
                                    <path
                                        d="M 20 200 Q 80 200, 140 200"
                                        stroke="#F59E0B"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    {/* Line to Hooks (bottom card) */}
                                    <path
                                        d="M 20 200 Q 80 270, 140 320"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>

                                {/* Floating Cards - Stacked on Right */}
                                <div className="ml-0 md:ml-16 space-y-3 relative z-10 flex flex-col items-center md:items-start">
                                    {/* Banned Claims Card - Red */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.1,
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 10
                                        }}
                                        className="bg-white rounded-xl border border-red-200 shadow-sm p-4 hover:shadow-md transition-shadow w-full max-w-xs"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                                                <XCircle className="w-5 h-5 text-red-500" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm text-red-600">Banned claims</p>
                                                <p className="text-xs text-gray-400">Officially recommended by legal team</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Do's and Don'ts Card - Yellow/Amber */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.2,
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 10
                                        }}
                                        className="bg-white rounded-xl border border-amber-200 shadow-sm p-4 hover:shadow-md transition-shadow w-full max-w-xs"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                                                <AlertCircle className="w-5 h-5 text-amber-500" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm text-amber-700">Do's and Don'ts</p>
                                                <p className="text-xs text-gray-400">Resolve all comments within 24 hrs.</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Hooks Card - Blue */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.3,
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 10
                                        }}
                                        className="bg-white rounded-xl border border-blue-200 shadow-sm p-4 hover:shadow-md transition-shadow w-full max-w-xs"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                                <Pencil className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm text-blue-700">Hooks</p>
                                                <p className="text-xs text-gray-400 mt-1">
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
                </motion.div>


                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
                        onClick={openModal}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="relative bg-white rounded-[32px] shadow-2xl max-w-5xl w-full overflow-hidden z-10 flex flex-col md:flex-row min-h-[500px]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-800 md:text-white" />
                            </button>

                            {/* LEFT COLUMN: Content & Form */}
                            <div className="flex-1 p-8 md:p-14 flex flex-col justify-center text-center md:text-left">
                                <h2 className="text-2xl md:text-4xl font-bold text-[#418CFF] leading-tight mb-4">
                                    Plan, generate, recruit and approve for your Campaigns... <br />
                                    <span className="text-[#418CFF]">All in one place.</span>
                                </h2>

                                <p className="text-[#94BFFF] text-lg mb-8">
                                    Join the waitlist today and <span className="font-bold text-[#1071C5]">lock 40% off</span> your first year when we launch.
                                </p>

                                {/* Countdown Timer */}
                                <div className="flex justify-center md:justify-start gap-3 mb-10">
                                    {[
                                        { label: 'Months', val: String(timeLeft.months).padStart(2, '0') },
                                        { label: 'Days', val: String(timeLeft.days).padStart(2, '0') },
                                        { label: 'Hours', val: String(timeLeft.hours).padStart(2, '0') },
                                        { label: 'Minutes', val: String(timeLeft.minutes).padStart(2, '0') },
                                        { label: 'Seconds', val: String(timeLeft.seconds).padStart(2, '0') }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col items-center">
                                            <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                                                {item.label}
                                            </span>
                                            <div className="flex gap-1">
                                                {item.val.split('').map((digit, di) => (
                                                    <div
                                                        key={di}
                                                        className="w-10 h-14 bg-[#E8F4FD] rounded-lg flex items-center justify-center text-2xl font-bold text-[#007BFF] border border-[#B8D4F0]"
                                                    >
                                                        {digit}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Form */}
                                <form className="relative max-w-md">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full pl-6 pr-12 py-5 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-blue-500/20 outline-none text-gray-700 transition-all mb-4"
                                    />
                                    <Button
                                        type="submit"
                                        className="w-full text-white py-5 rounded-2xl text-lg font-bold shadow-lg shadow-blue-500/25 transition-transform active:scale-95"
                                        style={{ background: 'linear-gradient(90deg, #0088FF 0%, #3F3BA9 54.66%, #0379E0 100%)' }}
                                    >
                                        Join the waitlist
                                    </Button>
                                </form>
                            </div>

                            {/* RIGHT COLUMN: 3D Visual Section */}
                            <div className="hidden md:flex flex-1 relative bg-gradient-to-br from-[#E0F2FE] via-[#DBEAFE] to-[#BFDBFE] items-center justify-center overflow-hidden">
                                {/* Background Glows */}
                                <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-400/30 blur-[100px] rounded-full" />
                                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-indigo-400/25 blur-[120px] rounded-full" />

                                {/* Image - Full Fill */}
                                <img
                                    src="/waitlist.png"
                                    alt="Platform Preview"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}

            </div>
        </section>
    );
}