'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-blue-200"
                            >
                                Find Us
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-black text-slate-900"
                            >
                                Visit Our <span className="text-logo-blue">Clinic</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-slate-600 text-lg leading-relaxed max-w-lg"
                            >
                                Located in the heart of the city, Swaraj Dental & Implant Center is easily accessible and offers a comfortable environment for all our patients.
                            </motion.p>
                        </div>

                        <div className="space-y-8">
                            {[
                                {
                                    label: 'Clinic Address',
                                    info: '123 Health Avenue, Near Central Mall, Swaraj City, PIN - 400001',
                                    icon: <MapPin className="text-logo-blue" />,
                                    link: 'https://maps.google.com'
                                },
                                {
                                    label: 'Phone Number',
                                    info: '+91 98765 43210 / 022 1234 5678',
                                    icon: <Phone className="text-logo-blue" />,
                                    link: 'tel:+919876543210'
                                },
                                {
                                    label: 'Email Address',
                                    info: 'support@swarajdental.com',
                                    icon: <Mail className="text-logo-blue" />,
                                    link: 'mailto:support@swarajdental.com'
                                },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start space-x-6 p-6 rounded-3xl group hover:bg-slate-50 border border-transparent hover:border-blue-100 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center p-3 group-hover:bg-logo-blue group-hover:text-white transition-all duration-300 scale-100 group-hover:scale-110">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none mb-2">{item.label}</h4>
                                        <p className="font-bold text-slate-800 tracking-tight text-lg group-hover:text-blue-700 transition-colors leading-relaxed">{item.info}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="pt-6">
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Stay Connected</p>
                            <div className="flex space-x-4">
                                {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                                    <motion.a
                                        key={i}
                                        href="#"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-logo-blue hover:text-white transition-all"
                                    >
                                        <Icon size={20} />
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
                        className="relative h-[600px] rounded-[50px] overflow-hidden shadow-2xl border-8 border-white group"
                    >
                        {/* Real Map Iframe or Placeholder */}
                        <div className="absolute inset-0 bg-slate-200 grayscale group-hover:grayscale-0 transition-all duration-700 cursor-pointer">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b391%3A0xd6680455d3f10128!2sIndia!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="absolute bottom-10 left-10 right-10 z-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white flex items-center justify-between">
                            <div>
                                <p className="font-black text-slate-900 leading-tight">Swaraj Dental & Implant Center</p>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Main Junction, Swaraj City</p>
                            </div>
                            <a href="#" className="bg-logo-blue text-white p-3 rounded-xl hover:bg-blue-700 transition-all">
                                <MapPin size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
