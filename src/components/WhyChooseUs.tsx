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
        <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-800/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-blue-800/50 text-blue-200 font-bold px-4 py-1.5 rounded-full text-[10px] md:text-xs uppercase tracking-widest border border-blue-700/50"
                    >
                        Why Choose Us
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black leading-tight"
                    >
                        A Standard of Care <br />
                        <span className="text-blue-400">You Can Trust</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-white/10 hover:bg-white/10 transition-all duration-500 flex flex-col items-center text-center group"
                        >
                            <div className={`${feature.color} w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 shadow-xl transform transition-transform group-hover:rotate-12`}>
                                <div className="text-white">
                                    {feature.icon}
                                </div>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight text-white">
                                {feature.title}
                            </h3>

                            <p className="text-blue-100/70 leading-relaxed text-sm font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
