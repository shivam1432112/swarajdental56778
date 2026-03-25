'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Nitin Borde",
        review: "Dr. Wagh explained everything clearly and made me feel comfortable. Very gentle, caring, and professional. Clean and well-organized clinic.",
        rating: 5
    },
    {
        name: "Rutuja Bhokare",
        review: "Excellent dental surgery experience. Completely painless procedure with smooth recovery. Highly recommended.",
        rating: 5
    },
    {
        name: "Riddhi Siddhi Anbhule",
        review: "Very clean and hygienic clinic. Staff and doctor are polite and friendly. Treatment was done perfectly.",
        rating: 5
    },
    {
        name: "Pratik Kakde",
        review: "Highly skilled doctor with modern equipment. Great patient care and excellent treatment at a fair price.",
        rating: 5
    },
    {
        name: "Gaurav Rajput",
        review: "Wisdom tooth extraction was painless and smooth. Doctor handled everything calmly. Highly recommended in the area.",
        rating: 5
    },
    {
        name: "Vaishali Nipunge",
        review: "Amazing experience. I was very anxious, but the doctor was gentle and made the treatment painless.",
        rating: 5
    },
    {
        name: "Hemant Dole",
        review: "Felt very relaxed during treatment. Doctor’s precision and knowledge are impressive. Must visit clinic.",
        rating: 5
    },
    {
        name: "Yogita Jangle",
        review: "Very polite and professional doctor. Treatment was smooth and painless. Highly recommended.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Headers */}
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-blue-100/50 text-[#1E6FB4] font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-blue-100"
                    >
                        Trusted by 60+ Happy Patients
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
                    >
                        What Our Patients <span className="text-[#1E6FB4]">Say</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto"
                    >
                        Read authentic reviews from our patients who have experienced our world-class, painless dental treatments firsthand.
                    </motion.p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((testi, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(30,111,180,0.15)] transition-all duration-300 hover:-translate-y-1 relative group flex flex-col h-full"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-8 text-slate-100 group-hover:text-blue-50 transition-colors duration-300">
                                <Quote size={60} className="fill-current transform rotate-180" />
                            </div>

                            {/* Ratings */}
                            <div className="flex space-x-1 mb-6 relative z-10">
                                {[...Array(testi.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Review Content */}
                            <p className="text-slate-700 font-medium text-[15px] md:text-base leading-relaxed mb-8 relative z-10 flex-grow">
                                "{testi.review}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center space-x-4 mt-auto relative z-10 pt-6 border-t border-slate-50">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#1E6FB4] font-black text-xl border border-blue-100 flex-shrink-0">
                                    {testi.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-base">{testi.name}</h4>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-0.5">Verified Patient</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}
