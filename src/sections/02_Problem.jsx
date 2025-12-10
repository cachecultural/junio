import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle } from 'lucide-react';

import rocketAnimation from '../assets/Rocket.json';
import Lottie from 'lottie-react';

const Problem = () => {
    return (
        <Section id="problem" background="transparent">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 relative">
                    {/* Visual representing 'Disordered' vs 'Ordered' or just a cool graphic */}
                    <div className="relative aspect-square flex items-center justify-center">
                        {/* Rocket Animation - Floating freely and scaled up */}
                        <div className="relative z-10 w-full h-full scale-[1.33]">
                            <Lottie
                                animationData={rocketAnimation}
                                loop={true}
                                className="w-full h-full"
                                rendererSettings={{
                                    preserveAspectRatio: 'xMidYMid slice',
                                    progressiveLoad: true,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        You've Built a Real Business. <br />
                        <span className="text-gray-500">Your Online Presence Still Looks Like a Side Hustle.</span>
                    </h2>

                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            You know the feeling: a client asks for your website. You cringe a little.
                        </p>
                        <div
                            className="p-6 rounded-2xl border border-white/10"
                            style={{ background: 'rgba(20, 20, 30, 0.88)' }}
                        >
                            <p>
                                Your work is professional. Your pricing is professional. But your Instagram looks like you post whenever you remember. Your website loads slowly and has your old logo from 2019.
                            </p>
                        </div>
                        <div className="pl-6 border-l-2 border-brand-primary">
                            <p className="text-white font-medium italic">
                                YOU'RE LEAVING MONEY ON THE TABLE!!
                            </p>
                        </div>
                        <div
                            className="p-6 rounded-2xl border border-white/10"
                            style={{ background: 'rgba(20, 20, 30, 0.88)' }}
                        >
                            <p>
                                Not because your business isn't good... it is. But because online, you look like you're still figuring it out. Meanwhile, your competitors with worse products have better websites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Problem;
