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
        <section id="gallery" className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-blue-50 text-blue-700 font-bold px-4 py-1.5 rounded-full text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 border border-blue-100"
                    >
                        Visit Our Clinic
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-slate-900 leading-tight"
                    >
                        A Glimpse of our <span className="text-blue-600">Facility</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 mt-4 max-w-2xl mx-auto text-sm md:text-base font-medium"
                    >
                        Experience the comfort and technology of our clinic through these photos.
                        Click any image to view it full screen.
                    </motion.p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedIdx(index)}
                            className="relative group cursor-pointer rounded-2xl md:rounded-[32px] overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[3/2] border border-slate-100"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/20">
                                    <Maximize2 className="text-white w-6 h-6 md:w-8 md:h-8" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-slate-900/90 to-transparent">
                                <p className="text-white font-bold text-sm md:text-base">{image.title}</p>
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
                        className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setSelectedIdx(null)}
                    >
                        {/* Close button - larger for mobile */}
                        <button
                            className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors z-[110] p-2 bg-white/10 rounded-full"
                            onClick={(e) => { e.stopPropagation(); setSelectedIdx(null); }}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Navigation Buttons - visible on mobile but smaller */}
                        <button
                            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-[110] bg-white/10 md:bg-white/20 p-2 md:p-4 rounded-full"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" />
                        </button>
                        <button
                            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-[110] bg-white/10 md:bg-white/20 p-2 md:p-4 rounded-full"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <ChevronRight className="w-6 h-6 md:w-10 md:h-10" />
                        </button>

                        <motion.div
                            key={selectedIdx}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="relative w-full h-full max-w-5xl flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-[60vh] md:h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src={images[selectedIdx].src}
                                    alt={images[selectedIdx].alt}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="mt-6 md:mt-8 text-center px-4">
                                <h3 className="text-white text-xl md:text-3xl font-black mb-2">{images[selectedIdx].title}</h3>
                                <div className="inline-flex bg-white/10 backdrop-blur-md px-4 py-1 rounded-full">
                                    <p className="text-white/70 font-bold uppercase tracking-widest text-[10px]">
                                        {selectedIdx + 1} / {images.length}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
