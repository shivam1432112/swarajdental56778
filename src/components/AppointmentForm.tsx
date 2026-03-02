'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, Clock, User, Phone, Mail, Stethoscope } from 'lucide-react';

export default function AppointmentForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            // Reset after 3 seconds
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1500);
    };

    return (
        <section id="appointment" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Header Part */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-blue-200"
                        >
                            Book an Appointment
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
                        >
                            Start Your Journey <br />
                            <span className="text-logo-blue">to a Better Smile</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-600 text-lg leading-relaxed max-w-lg"
                        >
                            Fill out the form to schedule a consultation. Our team will contact you shortly to confirm your preferred date and time.
                        </motion.p>

                        <div className="space-y-6">
                            {[
                                { label: 'Working Hours', info: 'Mon - Sat: 9:00 AM - 8:00 PM', icon: <Clock className="text-logo-blue" /> },
                                { label: 'Emergency Contact', info: '+91 1800 123 4567', icon: <Phone className="text-logo-blue" /> },
                                { label: 'Official Email', info: 'contact@swarajdental.com', icon: <Mail className="text-logo-blue" /> },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all hover:bg-slate-50 cursor-default">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center p-3">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.label}</h4>
                                        <p className="font-bold text-slate-900 tracking-tight">{item.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Part */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-10 lg:p-14 rounded-[48px] shadow-2xl shadow-blue-200 border border-blue-50 relative"
                    >
                        {isSubmitted && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute inset-0 bg-white/90 backdrop-blur-sm z-20 flex flex-center rounded-[48px] items-center justify-center text-center p-10"
                            >
                                <div className="space-y-4">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send className="text-green-600 w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900">Thank You!</h3>
                                    <p className="text-slate-600 max-w-[250px] mx-auto">Your appointment request has been sent successfully. We will call you soon.</p>
                                </div>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-logo-blue transition-colors" size={20} />
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-blue-200 focus:bg-white transition-all text-slate-900 font-semibold"
                                            placeholder="Ex: Rajesh Kumar"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-logo-blue transition-colors" size={20} />
                                        <input
                                            required
                                            type="tel"
                                            className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-blue-200 focus:bg-white transition-all text-slate-900 font-semibold"
                                            placeholder="Ex: +91 98765 43210"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-logo-blue transition-colors" size={20} />
                                        <input
                                            required
                                            type="email"
                                            className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-blue-200 focus:bg-white transition-all text-slate-900 font-semibold"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Preferred Service</label>
                                    <div className="relative group">
                                        <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-logo-blue transition-colors" size={20} />
                                        <select
                                            className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-blue-200 focus:bg-white transition-all text-slate-900 font-semibold appearance-none"
                                        >
                                            <option>Teeth Whitening</option>
                                            <option>Dental Implants</option>
                                            <option>Braces & Aligners</option>
                                            <option>Root Canal</option>
                                            <option>Smile Makeover</option>
                                            <option>General Checkup</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Preferred Appointment Date</label>
                                <div className="relative group">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-logo-blue transition-colors" size={20} />
                                    <input
                                        required
                                        type="date"
                                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-blue-200 focus:bg-white transition-all text-slate-900 font-semibold"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">Message (Optional)</label>
                                <textarea
                                    className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 px-6 outline-none focus:border-blue-200 focus:bg-white transition-all text-slate-900 font-semibold min-h-[120px]"
                                    placeholder="Tell us about your dental concern..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-logo-blue text-white rounded-2xl py-6 font-black text-xl flex items-center justify-center space-x-3 shadow-2xl shadow-blue-200 hover:shadow-blue-400 hover:-translate-y-1 active:scale-95 transition-all disabled:bg-slate-300 group"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <span>Confirm Booking</span>
                                        <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
