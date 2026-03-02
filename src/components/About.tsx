'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, UserCheck, Microscope, Award } from 'lucide-react';

export default function About() {
    const stats = [
        { label: 'Happy Patients', value: '10K+', icon: <UserCheck className="w-6 h-6" /> },
        { label: 'Years of Experience', value: '15+', icon: <Award className="w-6 h-6" /> },
        { label: 'Modern Equipment', value: '100%', icon: <Microscope className="w-6 h-6" /> },
    ];

    return (
        <section id="about" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Part */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl shadow-blue-200 border-8 border-white group">
                            <Image
                                src="/images/lobby-reception.jpg"
                                alt="Modern Clinic Interior - Swaraj Dental & Implant Center"
                                width={800}
                                height={600}
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Experience badge */}
                        <div className="absolute -bottom-8 -right-8 z-20 bg-logo-blue text-white p-8 rounded-[32px] shadow-2xl shadow-blue-400 max-w-[200px] text-center">
                            <span className="block text-4xl font-black mb-1">15+</span>
                            <span className="text-sm font-bold uppercase tracking-widest opacity-90">Years Experience</span>
                        </div>

                        {/* Decorative dots */}
                        <div className="absolute -top-12 -left-12 grid grid-cols-6 gap-2 opacity-20 -z-10">
                            {[...Array(36)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-logo-blue rounded-full" />
                            ))}
                        </div>
                    </motion.div>

                    {/* Content Part */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block bg-white text-blue-700 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-blue-100"
                        >
                            Who We Are
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
                        >
                            Excellence in <br />
                            <span className="text-logo-blue">Modern Dentistry</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-600 text-lg leading-relaxed"
                        >
                            At <span className="font-bold text-slate-900">Swaraj Dental & Implant Center</span>, we combine clinical expertise with
                            state-of-the-art technology to provide the highest standard of oral care. Our
                            experienced team is dedicated to your comfort and health.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {[
                                'Highly Experienced Dentists',
                                'Painless Treatment Options',
                                'Advanced Digital Imaging',
                                'Affordable & Transparent Pricing'
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-3 group">
                                    <div className="p-1 bg-green-100 rounded-full group-hover:bg-blue-100 transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 group-hover:text-logo-blue transition-colors" />
                                    </div>
                                    <span className="font-semibold text-slate-800 tracking-tight">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-200"
                        >
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center group cursor-default">
                                    <div className="mx-auto w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center mb-3 text-logo-blue group-hover:text-white group-hover:bg-logo-blue transition-all duration-300">
                                        {stat.icon}
                                    </div>
                                    <p className="text-2xl font-black text-slate-900 leading-none mb-1">{stat.value}</p>
                                    <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
