'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false);
    
    // WhatsApp Configuration
    const phoneNumber = "919021748601";
    const message = "Hi, I’d like to book an appointment.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-[999] md:bottom-10 md:right-10 flex items-center justify-end">
            {/* Desktop Tooltip */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
                transition={{ duration: 0.2 }}
                className="absolute right-[110%] mr-4 whitespace-nowrap bg-white text-slate-900 font-semibold px-4 py-2.5 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 pointer-events-none hidden sm:block"
            >
                Chat with us on WhatsApp
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-slate-100 transform rotate-45" />
            </motion.div>

            {/* Floating Action Button */}
            <Link 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 active:scale-95 transition-transform"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Subtile Pulse Ring Animation */}
                <span className="absolute inline-flex h-[115%] w-[115%] rounded-full bg-[#25D366] opacity-30 animate-ping" />
                
                {/* Main WhatsApp Button */}
                <div className="relative flex items-center justify-center w-full h-full bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 md:w-9 md:h-9 ml-0.5 mt-0.5"
                    >
                        <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.2m2.5-9.1C16.9 2.5 13.8 1.1 10.5 1.1c-6.1 0-11 4.9-11 11 0 1.9.5 3.8 1.5 5.5L0 24l6.5-1.7c1.7.9 3.6 1.4 5.5 1.4h.1c6.1 0 11-4.9 11-11 0-3-.1-5.8-2.3-8-2-2-4.9-3.1-4.2-3.1M12 21.6c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3.3.9.9-3.2-.2-.3c-.9-1.4-1.4-3-1.4-4.8 0-5.1 4.1-9.2 9.2-9.2 2.5 0 4.8 1 6.5 2.7 1.8 1.8 2.7 4.1 2.7 6.5-.1 5.2-4.2 9.3-9.3 9.3" />
                    </svg>
                </div>
            </Link>
        </div>
    );
}
