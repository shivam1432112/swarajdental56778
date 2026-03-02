'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Calendar, ArrowRight, ShieldCheck, HeartPulse, Clock } from 'lucide-react';
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
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-slate-50">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-100/50 rounded-bl-[100px] -z-10 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-200/40 rounded-tr-[100px] -z-10 blur-2xl opacity-40" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Hero Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center space-x-3 bg-logo-blue/10 pl-2 pr-4 py-2 rounded-full border border-logo-blue/20">
                        <div className="w-8 h-8 relative rounded-full overflow-hidden bg-white shadow-sm ring-2 ring-logo-blue/20">
                            <Image
                                src="/logo.png"
                                alt="Swaraj Logo"
                                fill
                                className="object-contain p-0.5"
                                priority
                            />
                        </div>
                        <span className="text-logo-blue text-xs font-bold tracking-widest uppercase">Dental & Implant Excellence</span>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h1 className="text-6xl lg:text-8xl font-medium text-slate-950 leading-[1] tracking-tight">
                            Your <span className="font-[family-name:var(--font-playfair)] italic text-blue-700 font-bold">Smile</span>, <br />
                            <span className="relative">
                                Our <span className="font-[family-name:var(--font-playfair)] italic text-blue-600 font-bold">Mission</span>
                                <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 400 20" fill="none" preserveAspectRatio="none">
                                    <path d="M5 15C100 5 300 5 395 15" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.3" />
                                </svg>
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-lg leading-relaxed">
                        Experience world-class dental care with advanced technology and a gentle touch.
                        From routine checkups to complex smile makeovers, we are here for you.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            href="#appointment"
                            className="w-full sm:w-auto bg-logo-blue text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center space-x-2 shadow-2xl shadow-logo-blue/30 hover:shadow-logo-blue/50 transition-all hover:-translate-y-1 active:scale-95 group"
                        >
                            <span>Book Appointment</span>
                            <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </Link>

                        <Link
                            href="tel:+911234567890"
                            className="w-full sm:w-auto bg-white text-blue-900 border-2 border-slate-100 hover:border-blue-200 px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all hover:bg-slate-50 active:scale-95"
                        >
                            <Phone className="w-5 h-5 text-blue-600" />
                            <span>Call Now</span>
                        </Link>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-200">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-slate-900 uppercase text-sm">Certified</span>
                                <span className="text-xs text-slate-500">Industry Experts</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 border-l pl-6 border-slate-200">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <HeartPulse className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-slate-900 uppercase text-sm">Painless</span>
                                <span className="text-xs text-slate-500">Modern Tech</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 border-l pl-6 border-slate-200">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Clock className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-slate-900 uppercase text-sm">24/7 Care</span>
                                <span className="text-xs text-slate-500">Always On</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative group"
                >
                    <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-blue-200/50 border-[12px] border-white">
                        <Image
                            src="/hero-dentist.png"
                            alt="Professional Dentist - Swaraj Dental Clinic"
                            width={600}
                            height={700}
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                    </div>

                    {/* Floating elements */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-10 -left-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-4"
                    >
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <ShieldCheck className="text-green-600" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500">Patient Satisfaction</p>
                            <p className="font-bold text-slate-900">99.9% Happy</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, -5, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        className="absolute -bottom-10 -right-10 z-20 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 text-center"
                    >
                        <p className="text-3xl font-black text-blue-600 leading-tight">15+</p>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years Experience</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
