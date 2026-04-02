'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'About', href: 'about' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Contact', href: 'contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
                    isScrolled
                        ? 'bg-white/80 backdrop-blur-lg shadow-md py-3'
                        : 'bg-transparent'
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex items-center space-x-2 md:space-x-3 group animate-in fade-in slide-in-from-left duration-500"
                    >
                        <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-transform group-hover:scale-110 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                            <Image
                                src="/logo.png"
                                alt="Swaraj Dental & Implant Center"
                                width={56}
                                height={56}
                                className="object-contain p-1"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={cn("text-sm md:text-xl font-bold tracking-tight transition-colors text-black")}>
                                Swaraj Dental
                            </span>
                            <div className="flex items-center -mt-0.5">
                                <span className="text-sm md:text-xl font-bold tracking-tight transition-colors text-black">
                                    & Implant Center
                                </span>
                            </div>
                        </div>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="text-slate-600 hover:text-blue-600 font-bold transition-colors text-sm"
                            >
                                {link.name}
                            </button>
                        ))}
                        <Link
                            href="https://wa.me/919021748601?text=Hi,%20I%20want%20to%20book%20a%20dental%20appointment."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 active:scale-95"
                        >
                            Call For Appointment
                        </Link>
                    </div>

                    {/* Mobile Toggle & Call Action */}
                    <div className="flex items-center space-x-2 lg:hidden">
                        <Link
                            href="https://wa.me/919021748601?text=Hi,%20I%20want%20to%20book%20a%20dental%20appointment."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                        >
                            <Phone size={20} />
                        </Link>
                        <button
                            className="p-2.5 text-slate-900 bg-white shadow-sm border border-slate-100 rounded-full active:scale-90 transition-transform"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Premium Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] bg-slate-950/20 backdrop-blur-sm lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-[320px] lg:hidden bg-white/95 backdrop-blur-3xl flex flex-col shadow-2xl border-l border-white/20 overflow-hidden"
                        >
                            <div className="flex flex-shrink-0 items-center justify-between p-6 border-b border-slate-100/50">
                                <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center p-1 border border-slate-100">
                                        <Image src="/logo.png" alt="Logo" width={24} height={24} />
                                    </div>
                                    <span className="font-black text-black text-sm tracking-tight">Swaraj Dental</span>
                                </button>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-3 bg-slate-100/80 hover:bg-slate-200 text-slate-900 rounded-full transition-colors active:scale-90"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto px-8 py-10 space-y-6">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                    >
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="text-2xl sm:text-3xl font-black text-slate-900 hover:text-blue-600 transition-colors flex items-center group py-2 w-full text-left"
                                        >
                                            <span className="w-4 h-1 bg-blue-600 mr-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                                            {link.name}
                                        </button>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex flex-shrink-0 flex-col p-8 space-y-4 bg-slate-50/80 border-t border-slate-100/50">
                                <Link
                                    href="https://wa.me/919021748601?text=Hi,%20I%20want%20to%20book%20a%20dental%20appointment."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-blue-600 text-white px-6 py-4 rounded-2xl font-black text-center block shadow-xl shadow-blue-200 hover:bg-blue-700 active:scale-[0.98] transition-all"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Book Appointment
                                </Link>
                                <Link
                                    href="https://wa.me/919021748601?text=Hi,%20I%20want%20to%20book%20a%20dental%20appointment."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-slate-900 text-white px-6 py-4 rounded-2xl font-black text-center flex items-center justify-center space-x-3 active:scale-[0.98] transition-all group"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <Phone size={18} />
                                    </div>
                                    <span className="text-sm">Call Clinic</span>
                                </Link>
                                <p className="text-[10px] text-center font-bold text-slate-400 tracking-[0.2em] uppercase pt-2">Available 24/7 for Emergencies</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
