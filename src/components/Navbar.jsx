import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { Menu, X } from 'lucide-react';
// import logoSvg from '../assets/lad-nebula.svg';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-galaxy-100/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group relative z-50">
                    <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-galaxy-100 font-black text-xl">
                        L
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">LAD <span className="text-brand-primary">NEBULA</span></span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-brand-primary transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" className="px-6 py-2 text-sm" href="#contact">
                        Let's Talk
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-galaxy-200 border-b border-gray-800"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white text-lg font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button href="#contact" className="w-full text-center">
                                Let's Talk
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
