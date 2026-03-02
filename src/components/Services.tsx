'use client';

import { useState } from 'react';
import Image from 'next/image';
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
        details: 'At our clinic, we utilize the latest intra-oral cameras and digital diagnostic tools so you can see your dental health in real-time. Every check-up includes a thorough cleaning and comprehensive scanning to ensure early detection of any issues, preventing future discomfort and costly procedures.',
        images: ['/services/checkup_1.png', '/services/checkup_2.png'],
        features: [
            'Complete oral examination',
            'Professional teeth cleaning & brushing advice',
            'Digital dental scans & early diagnosis',
            'Fluoride treatments for cavity prevention',
            'Personalized dental health reports'
        ],
        color: 'bg-blue-50 text-blue-600',
        hoverColor: 'group-hover:bg-blue-600 group-hover:text-white',
    },
    {
        title: 'Tooth Fillings & Restorative Dentistry',
        icon: <ShieldCheck className="w-8 h-8" />,
        description: 'Tooth-colored cavity fillings, crowns, and bridges to repair damaged or decayed teeth effectively.',
        details: 'We use high-grade, biocompatible composite materials that perfectly match the natural shade of your teeth. Our restorative procedures are entirely painless and designed for maximum durability, focusing on restoring the natural strength and aesthetics of your smile.',
        images: ['/services/fillings_1.png', '/services/fillings_2.png'],
        features: [
            'Seamless tooth-colored fillings',
            'Zirconia & PFM dental crowns',
            'Durable dental bridges',
            'Painless decay removal',
            'Natural-looking dental restorations'
        ],
        color: 'bg-teal-50 text-teal-600',
        hoverColor: 'group-hover:bg-teal-600 group-hover:text-white',
    },
    {
        title: 'Root Canal Treatment',
        icon: <Syringe className="w-8 h-8" />,
        description: 'Advanced procedures performed to remove infection and preserve natural teeth while relieving pain.',
        details: 'Our clinic specializes in microscopic endodontics, ensuring 100% precision during root canal treatments. We use advanced, noiseless electronic systems to ensure a stress-free experience, often completing the entire procedure in a single sitting for your convenience.',
        images: ['/services/rct_1.png', '/services/rct_2.png'],
        features: [
            'Single-sitting root canal treatment',
            'Highly precise microscopic procedures',
            'Noiseless electronic equipment',
            'Complete infection removal',
            'Painless technique with local anesthesia'
        ],
        color: 'bg-rose-50 text-rose-600',
        hoverColor: 'group-hover:bg-rose-600 group-hover:text-white',
    },
    {
        title: 'Cosmetic Dentistry',
        icon: <Sparkles className="w-8 h-8" />,
        description: 'Teeth whitening, smile designing, and veneers for an aesthetic smile correction and boost in confidence.',
        details: 'Unlock your perfect smile with our Digital Smile Design (DSD) technology, allowing you to preview your results before the treatment begins. From professional laser whitening to ultra-thin porcelain veneers, we provide tailored aesthetic solutions to enhance your confidence.',
        images: ['/services/cosmetic_1.png', '/services/cosmetic_2.png'],
        features: [
            'Laser teeth whitening',
            'Digital Smile Designing (DSD)',
            'Ultra-thin porcelain veneers',
            'Aesthetic smile makeovers',
            'Tooth contouring & shaping'
        ],
        color: 'bg-violet-50 text-violet-600',
        hoverColor: 'group-hover:bg-violet-600 group-hover:text-white',
    },
    {
        title: 'Braces & Clear Aligners',
        icon: <Activity className="w-8 h-8" />,
        description: 'Metal, ceramic braces, and invisible aligners for properly aligned teeth and improved bite.',
        details: 'We specialize in modern orthodontic solutions, including nearly invisible clear aligners that offer comfort and aesthetic discretion. Through monthly digital progress tracking, we ensure your journey to a perfectly aligned smile is efficient and precise.',
        images: ['/services/braces_1.png', '/services/braces_2.png'],
        features: [
            'Custom-made clear aligners',
            'Traditional metal & ceramic braces',
            'Modern self-ligating braces',
            'Monthly progress digital monitoring',
            'Comfortable orthodontic solutions'
        ],
        color: 'bg-indigo-50 text-indigo-600',
        hoverColor: 'group-hover:bg-indigo-600 group-hover:text-white',
    },
    {
        title: 'Gum Treatment (Periodontal Care)',
        icon: <Droplets className="w-8 h-8" />,
        description: 'Scaling, root planing, and gum disease treatments to ensure your gums stay healthy and strong.',
        details: 'Maintain healthy gums with our advanced laser therapy that eliminates disease without bleeding or discomfort. Our professional scaling and deep root planing procedures are designed to strengthen your gum health, ensuring a solid foundation for your teeth.',
        images: ['/services/gum_1.png', '/services/gum_2.png'],
        features: [
            'Advanced laser gum therapy',
            'Professional scaling & polishing',
            'Treatments for bleeding & swollen gums',
            'Deep root planing',
            'Preventive periodontal management'
        ],
        color: 'bg-emerald-50 text-emerald-600',
        hoverColor: 'group-hover:bg-emerald-600 group-hover:text-white',
    },
    {
        title: 'Dental Implants',
        icon: <Bone className="w-8 h-8" />,
        description: 'Permanent replacement options for missing teeth that restore both function and appearance naturally.',
        details: 'We utilize globally recognized titanium implants that offer lifelong durability and a natural appearance. Our computer-guided surgical techniques ensure high accuracy, a painless experience, and a significantly faster recovery time for our patients.',
        images: ['/services/implant_1.png', '/services/implant_2.png'],
        features: [
            'Precision computer-guided implants',
            'Single-tooth & full-mouth restorations',
            'High-quality titanium materials',
            'Lifetime durable dental solutions',
            'Fast healing & recovery process'
        ],
        color: 'bg-amber-50 text-amber-600',
        hoverColor: 'group-hover:bg-amber-600 group-hover:text-white',
    },
    {
        title: 'Tooth Extraction & Oral Surgery',
        icon: <Scissors className="w-8 h-8" />,
        description: 'Safe and comfortable surgical care including wisdom tooth removal and minor oral procedures.',
        details: 'Our surgical procedures are performed in a strictly sterile environment utilizing painless extraction techniques. Whether it is a routine extraction or a complex wisdom tooth surgery, our specialists ensure minimal discomfort and a rapid recovery process.',
        images: ['/services/surgery_1.png', '/services/surgery_2.png'],
        features: [
            'Painless wisdom tooth removal',
            'Safe surgical tooth extractions',
            'Sterilized surgical environment',
            'Post-operative care & monitoring',
            'Minor oral surgical procedures'
        ],
        color: 'bg-orange-50 text-orange-600',
        hoverColor: 'group-hover:bg-orange-600 group-hover:text-white',
    },
    {
        title: 'Pediatric Dentistry (Kids Dental Care)',
        icon: <Baby className="w-8 h-8" />,
        description: 'Specialized dental check-ups and preventive care in a friendly environment tailored for children.',
        details: 'We provide a vibrant and welcoming environment for children, supported by gentle pediatric specialists. Following a strict "No-Pain" policy and using positive reinforcement, we ensure that every child leaves with a healthy smile and a positive view of dental care.',
        images: ['/services/pediatric_1.png', '/services/pediatric_2.png'],
        features: [
            'Kid-friendly dental environment',
            'Pain-free treatments for children',
            'Fluoride & sealant protections',
            'Early orthodontic screenings',
            'Engagement & reward-based dental care'
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
                                <div className="space-y-10">
                                    {/* Detailed Description */}
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest">How we do it</h4>
                                        <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-semibold">
                                            {selectedService.details}
                                        </p>
                                    </div>

                                    {/* AI Image Gallery */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {selectedService.images.map((img, i) => (
                                            <div key={i} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-4 border-slate-50">
                                                <Image
                                                    src={img}
                                                    alt={`${selectedService.title} - ${i + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Key Features */}
                                    <div className="space-y-6">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Service Includes</h4>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {selectedService.features.map((feature, i) => (
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    key={i}
                                                    className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50/50"
                                                >
                                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                                    </div>
                                                    <span className="text-slate-700 font-bold text-sm">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="pt-6 md:pt-10 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                                        <Link
                                            href="#appointment"
                                            onClick={() => setSelectedService(null)}
                                            className="w-full bg-blue-600 text-white px-8 py-4 md:py-5 rounded-2xl font-black flex items-center justify-center space-x-3 shadow-2xl shadow-blue-200 hover:-translate-y-1 transition-all active:scale-95"
                                        >
                                            <Calendar className="w-5 h-5" />
                                            <span>Book Appointment</span>
                                        </Link>
                                        <Link
                                            href="tel:+911234567890"
                                            className="w-full bg-slate-900 text-white px-8 py-4 md:py-5 rounded-2xl font-black flex items-center justify-center space-x-3 hover:bg-slate-800 transition-all shadow-xl active:scale-95"
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
