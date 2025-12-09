import React from 'react';
import Section from '../components/Section';
import { Check } from 'lucide-react';

const Outcomes = () => {
    const benefits = [
        "Look like the professional, premium brand they actually are",
        "Get more qualified leads from the same traffic (or even less)",
        "Stop relying only on word-of-mouth and referrals",
        "Spend less time explaining what they do—because their website does it",
        "Have systems that answer, filter, and follow up with leads 24/7"
    ];

    return (
        <Section id="outcomes" background="glass">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                    What This Looks Like When It's Working
                </h2>

                <div className="bg-galaxy-200 rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px]" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-brand-primary font-bold mb-4 tracking-widest uppercase text-sm">Outcomes</p>
                            <p className="text-gray-300 text-lg mb-8">
                                After working with us, clients typically:
                            </p>
                            <ul className="space-y-4">
                                {benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary mt-1">
                                            <Check size={14} strokeWidth={3} />
                                        </span>
                                        <span className="text-white">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-galaxy-300 rounded-xl p-8 border-l-4 border-brand-primary">
                            <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed">
                                "You shouldn't be losing out to competitors just because they look better online."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Outcomes;
