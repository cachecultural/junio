import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { motion } from 'framer-motion';
// import rocketAnimation from '../assets/sales-sky-rocket.json';
// import Lottie from 'lottie-react';

const Hero = () => {
    return (
        <Section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                >
                    <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                    <span className="text-brand-primary font-bold tracking-widest text-xs uppercase">An Integrated Approach</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight text-center">
                        Stop Looking Like <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Hundreds</span> <br />
                        When You're Making <span className="text-brand-primary text-glow">Thousands</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto mb-12"
                >
                    <div
                        className="p-6 md:p-8 rounded-2xl border border-white"
                        style={{
                            background: 'rgba(250, 250, 250, 0)',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            backdropFilter: 'blur(11.5px)',
                            WebkitBackdropFilter: 'blur(11.5px)',
                        }}
                    >
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                            Your work is solid. Your website looks like 2015. <br className="hidden md:block" />
                            Are you even running ads? <br className="hidden md:block" />
                            Stay focused on running your business while we handle the internet.
                        </p>
                    </div>
                </motion.div>

                {/* Benefits Grid - mini */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-300 font-medium"
                >
                    {['High-end websites that convert', 'Ads that bring customers', 'Peace of mind'].map((item, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span className="text-brand-primary">✓</span> {item}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Button variant="primary" href="#pricing">
                        Show Me What's Possible
                    </Button>
                    <Button variant="link" href="#process" className="text-white hover:text-brand-primary">
                        See our work →
                    </Button>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
