'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Calendar, ShieldCheck, HeartPulse, Clock, Sparkles, Star, Award } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    return (
        <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
            {/* Background Image & Abstract Medical Aesthetic Elements */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/dental-hero-bg.png"
                    alt="Dental Clinic Perfect Smile Background"
                    fill
                    className="object-cover object-center opacity-40 mix-blend-luminosity"
                    priority
                    quality={100}
                />

                {/* Abstract Tooth Outline Background */}
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="0.5" className="absolute -left-[20%] sm:-left-10 md:left-[5%] top-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] text-blue-600 opacity-20 blur-[60px] md:blur-[80px] -rotate-12 pointer-events-none animate-[pulse_6s_ease-in-out_infinite]">
                    <path d="M32 4 C44 4, 52 14, 52 28 C52 40, 44 48, 44 56 C44 60, 40 64, 36 64 C32 64, 32 52, 32 52 C32 52, 32 64, 28 64 C24 64, 20 60, 20 56 C20 48, 12 40, 12 28 C12 14, 20 4, 32 4 Z" />
                </svg>

                {/* Major Soft Glowing Smile Curve Behind Gradients */}
                <svg className="absolute -left-[50%] top-1/2 -translate-y-1/2 w-[200%] md:w-[150%] h-auto text-blue-400 opacity-15 blur-[40px] pointer-events-none" viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 150 Q 500 450 1000 150" stroke="url(#smile-gradient-bg)" strokeWidth="60" strokeLinecap="round" />
                    <defs>
                        <linearGradient id="smile-gradient-bg" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Overlay gradients for perfect text readability and depth */}
                <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/10 md:to-transparent opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

                {/* Sharp Glowing Smile Trace Overlay (Clean Aesthetic) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <svg className="absolute w-[150%] left-[-25%] top-[60%] sm:top-[70%] h-[300px] opacity-40 animate-[pulse_4s_ease-in-out_infinite]" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="none" stroke="url(#smile-glow)" strokeWidth="1.5" d="M-100,160 Q720,400 1540,160"></path>
                        <defs>
                            <linearGradient id="smile-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                                <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Hero Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8 text-center lg:text-left order-1 lg:order-1"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-100/50 shadow-sm">
                            <Sparkles size={14} className="animate-pulse" />
                            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase italic">The Smile Experts</span>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-slate-950 leading-[1.1] lg:leading-[1] tracking-tight">
                                Your <span className="font-[family-name:var(--font-playfair)] italic text-blue-700 font-bold">Smile</span>, <br className="hidden sm:block" />
                                <span className="relative">
                                    Our <span className="font-[family-name:var(--font-playfair)] italic text-blue-600 font-bold">Mission</span>
                                    <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full" viewBox="0 0 400 20" fill="none" preserveAspectRatio="none">
                                        <path d="M5 15C100 5 300 5 395 15" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.3" />
                                    </svg>
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Experience world-class dental care with advanced technology and a gentle touch.
                            From routine checkups to complex smile makeovers, we are here for you.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link
                                href="https://wa.me/919021748601?text=Hi,%20I%20want%20to%20book%20appointment."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-blue-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group"
                            >
                                <span>Book Appointment</span>
                                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </Link>

                            <Link
                                href="https://wa.me/919021748601?text=Hi,%20I%20want%20to%20book%20appointment."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-slate-50 text-blue-900 border border-slate-200 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 transition-all hover:bg-white hover:shadow-xl active:scale-95"
                            >
                                <Phone className="w-5 h-5 text-blue-600" />
                                <span>Call Clinic</span>
                            </Link>
                        </motion.div>

                        {/* Trust Badges - Optimized for Mobile */}
                        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-10 border-t border-slate-100">
                            {[
                                { icon: <ShieldCheck size={20} />, label: "Certified", sub: "Quality Guaranteed" },
                                { icon: <HeartPulse size={20} />, label: "Painless", sub: "Modern Tech" },
                                { icon: <Clock size={20} />, label: "24/7 Support", sub: "Always Available" }
                            ].map((badge, i) => (
                                <div key={i} className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-50/50 lg:bg-transparent justify-center lg:justify-start">
                                    <div className="p-2 bg-blue-100 rounded-xl text-blue-600">
                                        {badge.icon}
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wider">{badge.label}</span>
                                        <span className="text-[10px] text-slate-500 font-medium">{badge.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Hero Image - Optimized for Mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group order-2 lg:order-2"
                    >
                        <div className="relative z-10 rounded-[40px] md:rounded-[60px] lg:rounded-[80px] overflow-hidden shadow-2xl shadow-blue-200/50 border-[8px] md:border-[12px] border-white max-w-[450px] mx-auto lg:max-w-none lg:ml-auto">
                            <Image
                                src="/hero-dentist.png"
                                alt="Professional Dentist - Swaraj Dental Clinic"
                                width={600}
                                height={750}
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                        </div>

                        {/* Floating elements - Repositioned for Mobile */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-4 -left-4 md:-top-10 md:-left-10 z-20 bg-white p-3 md:p-5 rounded-2xl md:rounded-[32px] shadow-2xl border border-slate-50 flex items-center space-x-3 md:space-x-4 max-w-[140px] md:max-w-none"
                        >
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-50 text-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center">
                                <Star fill="currentColor" size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-widest">Rating</p>
                                <p className="font-black text-slate-900 text-sm md:text-xl leading-none">4.9/5 ★</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            className="absolute -bottom-4 -right-4 md:-bottom-10 md:-right-10 z-20 bg-white p-3 md:p-5 rounded-2xl md:rounded-[32px] shadow-2xl border border-slate-100 flex items-center space-x-3 md:space-x-4 max-w-[140px] md:max-w-none"
                        >
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-green-50 text-green-600 rounded-xl md:rounded-2xl flex items-center justify-center">
                                <Award size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-widest">Exp.</p>
                                <p className="font-black text-slate-900 text-sm md:text-xl leading-none">15+ Yrs</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
