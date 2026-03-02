'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left: Contact Info */}
                    <div className="space-y-10 md:space-y-12">
                        <div className="space-y-4 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-block bg-blue-50 text-blue-700 font-bold px-4 py-1.5 rounded-full text-[10px] md:text-xs uppercase tracking-widest border border-blue-100"
                            >
                                Find Us
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-black text-slate-900 leading-tight"
                            >
                                Visit Our <span className="text-blue-600">Clinic</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
                            >
                                Located in the heart of the city, Swaraj Dental & Implant Center is easily accessible and offers a comfortable environment.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                            {[
                                {
                                    label: 'Clinic Address',
                                    info: 'Swaraj Dental, Opp. Post Office, Main Road, City',
                                    icon: <MapPin className="text-blue-600" />,
                                    link: 'https://maps.google.com'
                                },
                                {
                                    label: 'Phone Number',
                                    info: '+91 98765 43210',
                                    icon: <Phone className="text-blue-600" />,
                                    link: 'tel:+919876543210'
                                },
                                {
                                    label: 'Email Address',
                                    info: 'contact@swarajdental.com',
                                    icon: <Mail className="text-blue-600" />,
                                    link: 'mailto:contact@swarajdental.com'
                                },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-4 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl shadow-sm flex items-center justify-center p-2 group-hover:bg-blue-600 group-hover:text-white transition-all scale-100 group-active:scale-95">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</h4>
                                        <p className="font-bold text-slate-800 tracking-tight text-sm md:text-base leading-tight group-hover:text-blue-700 transition-colors uppercase">{item.info}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="pt-4 text-center lg:text-left">
                            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 md:mb-6">Stay Connected</p>
                            <div className="flex justify-center lg:justify-start space-x-4">
                                {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                                    <motion.a
                                        key={i}
                                        href="#"
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative h-[400px] md:h-[600px] rounded-[32px] md:rounded-[50px] overflow-hidden shadow-2xl border-4 md:border-8 border-white group"
                    >
                        <div className="absolute inset-0 bg-slate-200 grayscale-0 transition-all duration-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b391%3A0xd6680455d3f10128!2sIndia!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                                className="w-full h-full border-0"
                                loading="lazy"
                            ></iframe>
                        </div>

                        <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 right-4 md:right-10 z-10 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-white flex items-center justify-between">
                            <div>
                                <p className="font-black text-slate-900 leading-tight text-sm md:text-base">Swaraj Dental Clinic</p>
                                <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-widest">Main Junction, City</p>
                            </div>
                            <a href="#" className="bg-blue-600 text-white p-2 md:p-3 rounded-xl hover:bg-blue-700 transition-all shadow-md">
                                <MapPin size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
