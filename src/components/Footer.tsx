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
        <footer className="bg-slate-900 text-slate-400 py-20 px-6 relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-8 items-start mb-20">

                    {/* Logo & Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center space-x-3 text-white group">
                            <div className="relative w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl shadow-logo-blue/30 overflow-hidden transition-transform group-hover:scale-110">
                                <Image
                                    src="/logo.png"
                                    alt="Swaraj Dental & Implant Center"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tight leading-none text-white transition-colors">
                                    Swaraj <span className="text-logo-orange">Dental</span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">
                                    & Implant Center
                                </span>
                            </div>
                        </Link>
                        <p className="text-lg text-slate-400 max-w-sm leading-relaxed">
                            Providing modern, compassionate, and high-quality dental care for you and your family. Your smile is our top priority.
                        </p>
                        <div className="relative group max-w-sm pt-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl py-4 px-6 outline-none focus:border-blue-500 pr-16 transition-all text-white font-semibold"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white rounded-xl px-4 flex items-center justify-center hover:bg-blue-500 transition-all">
                                <ArrowRight size={20} />
                            </button>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-3 ml-2">Subscribe to our healthy smile newsletter</p>
                        </div>
                    </div>

                    {/* Links columns */}
                    {footerLinks.map((column) => (
                        <div key={column.title} className="space-y-6 lg:ml-8">
                            <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8">{column.title}</h4>
                            <ul className="space-y-4">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-400 hover:text-white transition-all inline-flex items-center group font-semibold"
                                        >
                                            <span className="w-0 h-[2px] bg-blue-500 mr-0 transition-all group-hover:w-3 group-hover:mr-2 opacity-0 group-hover:opacity-100" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom copyright area */}
                <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <p className="text-sm font-bold tracking-tight text-slate-500">
                        © {currentYear} Swaraj Dental Clinic. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-2 text-sm font-bold tracking-tight text-slate-500">
                        <span>Made with</span>
                        <Heart size={16} fill="#ef4444" stroke="#ef4444" className="mx-0.5 animate-pulse" />
                        <span>for healthy smiles</span>
                    </div>
                    <div className="flex space-x-8 text-sm font-black uppercase tracking-widest text-slate-500">
                        <Link href="#" className="hover:text-blue-500 transition-colors">Legal</Link>
                        <Link href="#" className="hover:text-blue-500 transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-blue-500 transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
