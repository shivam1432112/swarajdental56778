'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const images = [
    { src: '/images/lobby-reception.jpg', alt: 'Clinic Waiting Area', title: 'Comfortable Waiting Area' },
    { src: '/images/reception-desk.jpg', alt: 'Reception Desk', title: 'Welcoming Reception' },
    { src: '/images/dental-chair.jpg', alt: 'Modern Dental Chair', title: 'Advanced Treatment Rooms' },
    { src: '/images/clinic-exterior.jpg', alt: 'Swaraj Dental Clinic Exterior', title: 'Modern Facility' },
    { src: '/images/clinic-mural.jpg', alt: 'Clinic Interior Mural', title: 'Hygienic & Aesthetic Environment' },
];

export default function ClinicGallery() {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    // Close lightbox on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedIdx(null);
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIdx]);

    const nextImage = () => {
        if (selectedIdx !== null) {
            setSelectedIdx((selectedIdx + 1) % images.length);
        }
    };

    const prevImage = () => {
        if (selectedIdx !== null) {
            setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
        }
    };

    return (
        <section id="gallery" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-logo-blue/10 text-logo-blue font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6"
                    >
                        Visit Our Clinic
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
                    >
                        A Glimpse of our <span className="text-logo-blue">World-Class Facility</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 mt-4 max-w-2xl mx-auto"
                    >
                        Experience the comfort and technology of our clinic through these photos. Click any image to view it full screen.
                    </motion.p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedIdx(index)}
                            className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-xl aspect-[3/2]"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
                                    <Maximize2 className="text-white w-8 h-8" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-bold">{image.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedIdx !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedIdx(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-6 right-6 text-white hover:text-logo-orange transition-colors z-[110]"
                            onClick={() => setSelectedIdx(null)}
                        >
                            <X className="w-10 h-10" />
                        </motion.button>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-logo-orange transition-colors z-[110] bg-white/10 p-3 rounded-full hidden md:block"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-logo-orange transition-colors z-[110] bg-white/10 p-3 rounded-full hidden md:block"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <motion.div
                            key={selectedIdx}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="relative w-full h-full max-w-6xl max-h-[80vh] flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10">
                                <Image
                                    src={images[selectedIdx].src}
                                    alt={images[selectedIdx].alt}
                                    fill
                                    className="object-contain" // Contain so original aspect ratio is seen
                                    priority
                                />
                            </div>
                            <div className="mt-6 text-center">
                                <h3 className="text-white text-2xl font-black mb-1">{images[selectedIdx].title}</h3>
                                <p className="text-white/60 font-bold uppercase tracking-widest text-xs">
                                    Image {selectedIdx + 1} of {images.length}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
