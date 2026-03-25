'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, UserCheck, Microscope, Award } from 'lucide-react';

export default function About() {
    const stats = [
        { label: 'Happy Patients', value: '10K+', icon: <UserCheck className="w-6 h-6" /> },
        { label: 'Years of Experience', value: '11+', icon: <Award className="w-6 h-6" /> },
        { label: 'Modern Equipment', value: '100%', icon: <Microscope className="w-6 h-6" /> },
    ];

    const doctors = [
        {
            name: "Dr. Pankaj Wagh",
            title: "Dental Surgeon & Implantologist",
            image: "/images/dr-pankaj.jpg",
            content: [
                "Dr. Pankaj Wagh completed his Bachelor of Dental Surgery (BDS) from the prestigious Nair Hospital Dental College, Mumbai.",
                "Following his graduation, he pursued advanced international training in Oral and Maxillofacial Implantology, developing a strong specialization in dental implants and advanced surgical procedures. He successfully completed his Diploma in Advanced Oral Implantology from College Extra-Universitaire D’Implantologie Orale et Maxillo-Faciale, France, with distinction, gaining expertise in Dental Implantology and Bone Grafting Surgery.",
                "Dr. Pankaj Wagh has extensive clinical experience across multiple dental setups and is committed to delivering high-quality, safe, and patient-centered dental care using the latest technologies and modern treatment protocols.",
                "He is currently serving as the Chief Dentist & Implantologist at Swaraj Dental & Implant Center (Main Branch). Additionally, he leads clinical services at Smile Stories Dental Clinic, Karmad, and practices as a Visiting Dental Consultant at Soniya Dental Clinic, Nevasa Fata.",
                "With a focus on precision, comfort, and long-term results, Dr. Pankaj Wagh aims to provide comprehensive dental solutions that enhance both oral health and patient confidence."
            ]
        },
        {
            name: "Dr. Soniya Nipunge Wagh",
            title: "Dental Surgeon",
            image: "/images/dr-soniya-new.jpg",
            content: [
                "Dr. Soniya Nipunge Wagh completed her Bachelor of Dental Surgery (BDS) from YCDC Dental College, Ahmednagar, securing First Class with Distinction.",
                "She is a dedicated and compassionate dental professional with a strong focus on delivering patient-centered, ethical, and high-quality dental care. Dr. Soniya has a keen interest in preventive and restorative dentistry, ensuring that patients not only receive treatment but also understand the importance of maintaining long-term oral health.",
                "With her gentle approach and excellent clinical skills, she is particularly appreciated by patients who may feel anxious about dental treatments. She believes in creating a comfortable and stress-free dental experience, especially for children and first-time patients.",
                "Dr. Soniya keeps herself updated with the latest advancements in dentistry and follows modern treatment protocols to provide safe, effective, and minimally invasive care.",
                "She is currently practicing at Soniya Dental Clinic, Nevasa Fata, and also serves Dentist at Swaraj Dental & Implant Center.",
                "Her approach combines clinical excellence with empathy, aiming to improve not just oral health but overall patient confidence and well-being."
            ]
        }
    ];

    return (
        <section id="about" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Top Section: About Clinic */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Part */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl shadow-blue-200 border-8 border-white group bg-slate-200 aspect-[4/3]">
                            <Image
                                src="/images/lobby-reception.jpg"
                                alt="Modern Clinic Interior - Swaraj Dental & Implant Center"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Experience badge */}
                        <div className="absolute -bottom-8 -right-8 z-20 bg-[#1E6FB4] text-white p-8 rounded-[32px] shadow-2xl shadow-blue-400 max-w-[200px] text-center">
                            <span className="block text-4xl font-black mb-1">11+</span>
                            <span className="text-sm font-bold uppercase tracking-widest opacity-90">Years Experience</span>
                        </div>

                        {/* Decorative dots */}
                        <div className="absolute -top-12 -left-12 grid grid-cols-6 gap-2 opacity-20 -z-10">
                            {[...Array(36)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-[#1E6FB4] rounded-full" />
                            ))}
                        </div>
                    </motion.div>

                    {/* Content Part */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block bg-white text-[#1E6FB4] font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-blue-100 shadow-sm"
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
                            <span className="text-[#1E6FB4]">Modern Dentistry</span>
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
                                    <div className="p-1 bg-green-100 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 group-hover:text-[#1E6FB4] transition-colors duration-300" />
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
                            className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 pt-10 border-t border-slate-200"
                        >
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center group cursor-default">
                                    <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl shadow-md flex items-center justify-center mb-3 text-blue-600 group-hover:text-white group-hover:bg-[#1E6FB4] transition-colors duration-300">
                                        {stat.icon}
                                    </div>
                                    <p className="text-xl md:text-2xl font-black text-slate-900 leading-none mb-1">{stat.value}</p>
                                    <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest leading-tight">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Section: Our Expert Dentists */}
                <div className="mt-32 border-t border-slate-200 pt-20">
                    <div className="text-center mb-16 space-y-4">
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-black text-slate-900"
                        >
                            Our Expert <span className="text-[#1E6FB4]">Dentists</span>
                        </motion.h3>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-600 md:text-lg max-w-2xl mx-auto font-medium"
                        >
                            Meet our highly qualified specialists dedicated to bringing you the best in modern dental and implant care.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-12">
                        {doctors.map((doc, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(30,111,180,0.15)] border border-slate-100 transition-all duration-300 flex flex-col h-full group"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-8 pb-8 border-b border-slate-100">
                                    <div className="w-28 h-28 sm:w-36 sm:h-36 relative flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">
                                        <Image 
                                            src={doc.image} 
                                            alt={doc.name} 
                                            fill 
                                            sizes="144px"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105" 
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-2">{doc.name}</h4>
                                        <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#1E6FB4] px-4 py-1.5 rounded-full">
                                            <span className="text-[11px] md:text-xs font-bold uppercase tracking-widest">{doc.title}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 text-slate-600 text-[15px] md:text-base leading-relaxed flex-grow">
                                    {doc.content.map((paragraph, pIdx) => (
                                        <p key={pIdx}>{paragraph}</p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
