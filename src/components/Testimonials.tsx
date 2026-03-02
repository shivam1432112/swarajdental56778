'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Heart } from 'lucide-react';

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Happy Patient",
        review: "The staff at Swaraj Dental is incredibly professional and friendly. My dental implant procedure was virtually painless, and the results are amazing. Highly recommended!",
        rating: 5,
        avatar: "/api/placeholder/100/100"
    },
    {
        name: "Sneha Patil",
        role: "Regular Patient",
        review: "I have been coming here for 3 years now. The clinic is always spotless, and they use the latest technology. Dr. Swaraj is very gentle and explains everything thoroughly.",
        rating: 5,
        avatar: "/api/placeholder/100/100"
    },
    {
        name: "Amit Sharma",
        role: "Braces Patient",
        review: "Excellent orthodontic treatment. My clear aligners are working perfectly, and the pricing was very transparent compared to other clinics. Great experience!",
        rating: 5,
        avatar: "/api/placeholder/100/100"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-blue-100/80 text-blue-700 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-blue-200"
                    >
                        Testimonials
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900"
                    >
                        What Our Patients <span className="text-blue-600">Say</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((testi, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 relative group"
                        >
                            <div className="absolute -top-6 -left-2 bg-blue-600 text-white p-3 rounded-2xl shadow-xl shadow-blue-200 transform group-hover:-rotate-12 transition-transform">
                                <Quote size={24} fill="currentColor" />
                            </div>

                            <div className="flex space-x-1 mb-6">
                                {[...Array(testi.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-blue-500 text-blue-500" />
                                ))}
                            </div>

                            <p className="text-slate-600 italic text-lg leading-relaxed mb-8">
                                "{testi.review}"
                            </p>

                            <div className="flex items-center space-x-4">
                                <div className="w-14 h-14 bg-blue-200 rounded-full overflow-hidden border-4 border-white shadow-md">
                                    {/* Placeholder avatar */}
                                    <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold">
                                        {testi.name[0]}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 leading-none mb-1">{testi.name}</h4>
                                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">{testi.role}</p>
                                </div>
                            </div>

                            <div className="absolute bottom-10 right-10 text-slate-100 group-hover:text-blue-100/50 transition-colors">
                                <Heart size={40} strokeWidth={3} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
