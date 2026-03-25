'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Instagram, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: 'Company',
            links: [
                { name: 'Home', href: '#' },
                { name: 'Services', href: '#services' },
                { name: 'About Us', href: '#about' },
                { name: 'Careers', href: '#' },
            ]
        },
        {
            title: 'Quick Links',
            links: [
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Appointment', href: '#appointment' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Contact', href: '#contact' },
            ]
        },
        {
            title: 'Connect',
            links: [
                { name: 'Instagram', href: '#' },
                { name: 'Facebook', href: '#' },
                { name: 'Twitter', href: '#' },
                { name: 'LinkedIn', href: '#' },
            ]
        },
    ];

    return (
        <footer className="bg-slate-900 text-slate-400 py-12 md:py-20 px-6 relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 items-start mb-16 md:mb-20">

                    {/* Logo & Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center space-x-3 text-white group">
                            <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/20 overflow-hidden transition-transform group-hover:scale-110">
                                <Image
                                    src="/logo.png"
                                    alt="Swaraj Dental"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg md:text-xl font-black tracking-tight leading-none text-white">
                                    Swaraj <span className="text-blue-500">Dental</span>
                                </span>
                                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">
                                    & Implant Center
                                </span>
                            </div>
                        </Link>
                        <p className="text-base md:text-lg text-slate-400 max-w-sm leading-relaxed">
                            Providing modern, compassionate, and high-quality dental care.
                            Your smile is our top priority.
                        </p>
                        <div className="relative group max-w-sm pt-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-slate-800/50 border-2 border-slate-700 rounded-xl md:rounded-2xl py-3 md:py-4 px-5 md:px-6 outline-none focus:border-blue-500 pr-14 transition-all text-white font-semibold text-sm"
                            />
                            <button className="absolute right-1.5 top-[14px] md:top-[18px] bg-blue-600 text-white rounded-lg md:rounded-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-blue-500 transition-all shadow-lg active:scale-95">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Links columns */}
                    {footerLinks.map((column) => (
                        <div key={column.title} className="space-y-4 md:space-y-6">
                            <h4 className="text-white font-black uppercase text-[10px] md:text-xs tracking-[0.2em] mb-4 md:mb-8 opacity-50">{column.title}</h4>
                            <ul className="space-y-3 md:space-y-4">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-400 hover:text-white transition-all inline-flex items-center group font-semibold text-sm md:text-base"
                                        >
                                            <span className="w-3 h-[2px] bg-blue-500 mr-2 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left opacity-0 group-hover:opacity-100" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom copyright area */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
                    <p className="text-xs md:text-sm font-bold tracking-tight text-slate-500">
                        © {currentYear} Swaraj Dental Clinic.
                    </p>
                    <div className="flex items-center space-x-2 text-[10px] md:text-xs font-bold tracking-tight text-slate-500 bg-slate-800/30 px-4 py-2 rounded-full">
                        <span>Made with</span>
                        <Heart size={14} fill="#ef4444" stroke="#ef4444" className="mx-0.5 animate-pulse" />
                        <span>for healthy smiles</span>
                    </div>
                    <div className="flex space-x-6 md:space-x-8 text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500">
                        <Link href="#" className="hover:text-blue-500 transition-colors">Legal</Link>
                        <Link href="#" className="hover:text-blue-500 transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-blue-500 transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
