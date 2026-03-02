'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles,
    Stethoscope,
    ShieldCheck,
    Syringe,
    Activity,
    Droplets,
    Bone,
    Baby,
    Scissors,
    X,
    CheckCircle2,
    Calendar,
    Phone
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const services = [
    {
        title: 'Dental Check-ups & Preventive Care',
        icon: <Stethoscope className="w-8 h-8" />,
        description: 'Complete oral examination, cleaning, and early diagnosis to maintain long-term dental health.',
        features: [
            'Complete oral examination',
            'Professional teeth cleaning & polishing',
            'Preventive dental treatments',
            'Early diagnosis of dental problems',
            'Regular preventive care helps maintain long-term dental health.'
        ],
        color: 'bg-blue-50 text-logo-blue',
        hoverColor: 'group-hover:bg-logo-blue group-hover:text-white',
    },
    {
        title: 'Tooth Fillings & Restorative Dentistry',
        icon: <ShieldCheck className="w-8 h-8" />,
        description: 'Tooth-colored cavity fillings, crowns, and bridges to repair damaged or decayed teeth effectively.',
        features: [
            'Tooth-colored cavity fillings',
            'Dental crowns',
            'Dental bridges',
            'Tooth restoration procedures',
            'These treatments help repair damaged or decayed teeth effectively.'
        ],
        color: 'bg-teal-50 text-teal-600',
        hoverColor: 'group-hover:bg-teal-600 group-hover:text-white',
    },
    {
        title: 'Root Canal Treatment',
        icon: <Syringe className="w-8 h-8" />,
        description: 'Advanced procedures performed to remove infection and preserve natural teeth while relieving pain.',
        features: [
            'Advanced root canal procedures',
            'Infection removal techniques',
            'Natural tooth preservation',
            'Pain relief management',
            'State-of-the-art dental technology usage'
        ],
        color: 'bg-rose-50 text-rose-600',
        hoverColor: 'group-hover:bg-rose-600 group-hover:text-white',
    },
    {
        title: 'Cosmetic Dentistry',
        icon: <Sparkles className="w-8 h-8" />,
        description: 'Teeth whitening, smile designing, and veneers for an aesthetic smile correction and boost in confidence.',
        features: [
            'Teeth whitening treatments',
            'Smile designing',
            'Dental veneers',
            'Aesthetic smile correction',
            'Enhance the appearance of your smile with modern cosmetic solutions.'
        ],
        color: 'bg-violet-50 text-violet-600',
        hoverColor: 'group-hover:bg-violet-600 group-hover:text-white',
    },
    {
        title: 'Braces & Clear Aligners',
        icon: <Activity className="w-8 h-8" />,
        description: 'Metal, ceramic braces, and invisible aligners for properly aligned teeth and improved bite.',
        features: [
            'Metal braces',
            'Ceramic braces',
            'Invisible aligners',
            'Teeth alignment correction',
            'Orthodontic treatments designed for properly aligned teeth and improved bite.'
        ],
        color: 'bg-indigo-50 text-indigo-600',
        hoverColor: 'group-hover:bg-indigo-600 group-hover:text-white',
    },
    {
        title: 'Gum Treatment (Periodontal Care)',
        icon: <Droplets className="w-8 h-8" />,
        description: 'Scaling, root planing, and gum disease treatments to ensure your gums stay healthy and strong.',
        features: [
            'Scaling & root planing',
            'Gum disease treatment',
            'Deep cleaning procedures',
            'Healthy gums play a vital role in maintaining strong teeth.'
        ],
        color: 'bg-emerald-50 text-emerald-600',
        hoverColor: 'group-hover:bg-emerald-600 group-hover:text-white',
    },
    {
        title: 'Dental Implants',
        icon: <Bone className="w-8 h-8" />,
        description: 'Permanent replacement options for missing teeth that restore both function and appearance naturally.',
        features: [
            'Permanent tooth replacement',
            'Natural appearance restoration',
            'Functional improvement',
            'High-quality titanium implants',
            'Long-lasting dental solutions'
        ],
        color: 'bg-amber-50 text-amber-600',
        hoverColor: 'group-hover:bg-amber-600 group-hover:text-white',
    },
    {
        title: 'Tooth Extraction & Oral Surgery',
        icon: <Scissors className="w-8 h-8" />,
        description: 'Safe and comfortable surgical care including wisdom tooth removal and minor oral procedures.',
        features: [
            'Simple tooth extraction',
            'Wisdom tooth removal',
            'Minor oral surgical procedures',
            'Safe and comfortable surgical dental care.'
        ],
        color: 'bg-orange-50 text-logo-blue',
        hoverColor: 'group-hover:bg-logo-blue group-hover:text-white',
    },
    {
        title: 'Pediatric Dentistry (Kids Dental Care)',
        icon: <Baby className="w-8 h-8" />,
        description: 'Specialized dental check-ups and preventive care in a friendly environment tailored for children.',
        features: [
            'Dental check-ups for children',
            'Preventive treatments',
            'Cavity protection care',
            'Specialized dental services for children in a friendly environment.'
        ],
        color: 'bg-pink-50 text-pink-600',
        hoverColor: 'group-hover:bg-pink-600 group-hover:text-white',
    },
];

export default function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest"
                    >
                        Our Services
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900"
                    >
                        Comprehensive Care for Your <span className="text-logo-blue">Perfect Smile</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 text-lg leading-relaxed"
                    >
                        We offer a wide range of specialized dental services tailored to meet the unique needs of every patient.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            onClick={() => setSelectedService(service)}
                            className="group relative bg-slate-50 p-6 md:p-10 rounded-[32px] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        >
                            <div className={cn(
                                "w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 mb-6 md:mb-8",
                                service.color,
                                service.hoverColor
                            )}>
                                {service.icon}
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-blue-700 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-sm md:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                                {service.description}
                            </p>

                            <div className="mt-6 md:mt-8 flex items-center text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                                <span>Learn More</span>
                                <svg className="ml-2 w-4 h-4 translate-y-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Service Detail Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: '100%' }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-2xl bg-white rounded-t-[40px] sm:rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                        >
                            {/* Modal Header */}
                            <div className={cn("p-8 md:p-12 flex items-start justify-between relative", selectedService.color)}>
                                <div className="space-y-4">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                        {selectedService.icon}
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
                                        {selectedService.title}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-slate-900 absolute top-6 right-6"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8 md:p-12 bg-white">
                                <div className="space-y-6 md:space-y-8">
                                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                                        {selectedService.description}
                                    </p>

                                    <div className="grid gap-3 md:gap-4">
                                        {selectedService.features.map((feature, i) => (
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                key={i}
                                                className="flex items-start space-x-3 group"
                                            >
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mt-1">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </div>
                                                <span className="text-slate-700 font-medium text-sm md:text-base">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="pt-6 md:pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                                        <Link
                                            href="#appointment"
                                            onClick={() => setSelectedService(null)}
                                            className="w-full bg-blue-600 text-white px-8 py-4 md:py-5 rounded-2xl font-black flex items-center justify-center space-x-2 shadow-xl shadow-blue-200 hover:-translate-y-1 transition-all"
                                        >
                                            <Calendar className="w-5 h-5" />
                                            <span>Book Appointment</span>
                                        </Link>
                                        <Link
                                            href="tel:+911234567890"
                                            className="w-full bg-slate-900 text-white px-8 py-4 md:py-5 rounded-2xl font-black flex items-center justify-center space-x-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
                                        >
                                            <Phone className="w-5 h-5" />
                                            <span>Call Clinic</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
