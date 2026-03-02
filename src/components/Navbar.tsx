'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
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

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
                isScrolled
                    ? 'bg-white/80 backdrop-blur-lg shadow-md py-3'
                    : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3 group animate-in fade-in slide-in-from-left duration-700">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform group-hover:scale-110 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                        <Image
                            src="/logo.png"
                            alt="Swaraj Dental & Implant Center"
                            width={56}
                            height={56}
                            className="object-contain p-1"
                            priority
                        />
                    </div>
                    <div className="flex flex-col font-[family-name:var(--font-outfit)]">
                        <span className={cn(
                            "text-2xl md:text-3xl font-bold tracking-tight transition-colors",
                            isScrolled ? "text-slate-950" : "text-slate-900"
                        )}>
                            <span className="font-[family-name:var(--font-playfair)] italic">Swaraj</span> <span className="text-blue-600 font-bold uppercase transition-all">Dental</span>
                        </span>
                        <div className="flex items-center space-x-2 -mt-0.5">
                            <div className="h-[1px] w-8 bg-blue-600/30 rounded-full" />
                            <span className="text-[9px] md:text-[10.5px] font-medium uppercase tracking-[0.3em] text-slate-500">
                                & Implant Center
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-slate-600 hover:text-logo-blue font-bold transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#appointment"
                        className="bg-logo-blue hover:bg-logo-blue/90 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-logo-blue/20 hover:shadow-logo-blue/30 active:scale-95"
                    >
                        Book Appointment
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-slate-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 mt-4 rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-600 hover:text-blue-600 font-medium text-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#appointment"
                                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Book Appointment
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
