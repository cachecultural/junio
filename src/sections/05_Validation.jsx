import React from 'react';
import Section from '../components/Section';
import { BadgeCheck, Users, BarChart3, Layers } from 'lucide-react';

const Validation = () => {
    return (
        <Section id="validation" background="transparent">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <div className="inline-block px-4 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary font-medium text-sm mb-6 border border-brand-secondary/20">
                    OPTION 1: The Straight-Talk Approach
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Why Businesses Making $500K+ Choose Us <br className="hidden md:block" />
                    <span className="text-gray-500">Over Cheaper (And Bigger) Options</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                <div className="space-y-6">
                    <div className="flex gap-6">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-primary">
                            <BarChart3 />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">We Only Work With Proven Businesses</h3>
                            <p className="text-gray-400 mb-2">If you're pre-revenue, we're not the right fit. We work with businesses that already have revenue.</p>
                            <p className="text-sm text-gray-500"><span className="text-brand-primary">Why this matters:</span> We don't waste time on fundamentals.</p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-primary">
                            <BadgeCheck />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">12+ Years Building Campaigns</h3>
                            <p className="text-gray-400 mb-2">Designed hundreds of ads. Built funnels that have generated millions. This is our only rodeo.</p>
                            <p className="text-sm text-gray-500"><span className="text-brand-primary">Why this matters:</span> You're paying for what we already know works.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex gap-6">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-primary">
                            <Users />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">You Work With The People Who Do The Work</h3>
                            <p className="text-gray-400 mb-2">No account managers "relaying feedback." You talk to the strategist and developer directly.</p>
                            <p className="text-sm text-gray-500"><span className="text-brand-primary">Why this matters:</span> Faster decisions. Better results.</p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-primary">
                            <Layers />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">One Clear System, Not Random Tactics</h3>
                            <p className="text-gray-400 mb-2">We build one integrated system: the right message, on the right platform, sending people to convert.</p>
                            <p className="text-sm text-gray-500"><span className="text-brand-primary">Why this matters:</span> You're not juggling five strategies.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-5xl mx-auto">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                    <p className="text-lg text-gray-300 italic mb-6">
                        "We went from a $600 website that embarrassed us to a complete system that books qualified calls while we sleep. Revenue up 140% in six months."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-600" />
                        <div>
                            <p className="text-white font-bold">Maya Lehman</p>
                            <p className="text-sm text-brand-primary">Dog Apparel Founder</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                    <p className="text-lg text-gray-300 italic mb-6">
                        "Finally, someone who actually understands business, not just bs marketing... Felix built exactly what we needed!"
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-600" />
                        <div>
                            <p className="text-white font-bold">Mark Cruz</p>
                            <p className="text-sm text-brand-primary">Real Estate Investor</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Validation;
