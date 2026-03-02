'use client';

import { motion } from 'framer-motion';
import {
    Users,
    Settings,
    CheckCircle,
    BadgeDollarSign
} from 'lucide-react';

const features = [
    {
        title: 'Experienced Doctors',
        description: 'Our team consists of board-certified dentists with years of clinical expertise and specialization.',
        icon: <Users className="w-8 h-8" />,
        color: 'bg-blue-600',
    },
    {
        title: 'Advanced Technology',
        description: 'We use the latest digital X-rays, laser dentistry, and precise diagnostic tools for better results.',
        icon: <Settings className="w-8 h-8" />,
        color: 'bg-indigo-600',
    },
    {
        title: 'Pain-Free Treatment',
        description: 'We specialize in gentle techniques and modern sedation options to ensure your complete comfort.',
        icon: <CheckCircle className="w-8 h-8" />,
        color: 'bg-teal-600',
    },
    {
        title: 'Affordable Care',
        description: 'Quality dentistry accessible to everyone through transparent pricing and EMI payment plans.',
        icon: <BadgeDollarSign className="w-8 h-8" />,
        color: 'bg-emerald-600',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-800/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-blue-800/80 text-blue-200 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-blue-700"
                    >
                        Why Choose Us
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black"
                    >
                        A Standard of Care <br />
                        <span className="text-blue-300">You Can Trust</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-blue-800/40 p-10 rounded-[40px] border border-blue-700/50 hover:bg-blue-800/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-950 flex flex-col items-center text-center group"
                        >
                            <div className={`${feature.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-xl transform transition-transform group-hover:rotate-12`}>
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 tracking-tight">
                                {feature.title}
                            </h3>

                            <p className="text-blue-200 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
