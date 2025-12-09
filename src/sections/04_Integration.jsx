import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
// import portalAnimation from '../assets/digital-portal.json';
import Lottie from 'lottie-react';
import { Activity } from 'lucide-react';

const features = [
    {
        title: "Websites Built Around Your Ads",
        subtitle: "Most designers have never seen your ad campaigns. Ours write the headlines for them.",
        result: "A site designed to convert the exact traffic your ads bring. No disconnect."
    },
    {
        title: "Ads Created By People Who Built Your Site",
        subtitle: "Your ad team knows your site loads in 1.2 seconds. They know which pages convert best.",
        result: "Ads that don't overpromise. Traffic that converts because the promise matches."
    },
    {
        title: "Content That Reinforces Your Campaigns",
        subtitle: "Your social media doesn't just 'post.' It supports your growth strategy.",
        result: "Every touchpoint strengthens the same message."
    },
    {
        title: "Automation That Catches What Humans Miss",
        subtitle: "Follow-ups happen automatically because we set the triggers based on your sales process.",
        result: "No more 'I'll get back to you.' Leads get immediate responses 24/7."
    },
    {
        title: "Copy That's Consistent Because It's Centralized",
        subtitle: "Your website, ads, emails don't sound like four different companies wrote them.",
        result: "Positioning so clear that prospects understand why you're the right choice."
    }
];

const Integration = () => {
    return (
        <Section id="integration" background="glass" className="overflow-visible">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Five Services. One Strategy. <br />
                    <span className="text-brand-primary">That's The Difference.</span>
                </h2>
                <p className="text-xl text-gray-400">
                    Here's what happens when the same team builds everything:
                </p>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:w-1 before:bg-gradient-to-b before:from-brand-primary before:to-transparent before:left-8 md:before:left-1/2 before:-translate-x-1/2 before:opacity-20">
                {/* Central Hub - Strategy - Using Lottie Portal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full max-w-[200px] hidden md:block">
                    <div className="w-40 h-40 mx-auto mb-4 relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-brand-primary/20 blur-[50px] rounded-full animate-pulse" />
                        <Activity size={48} className="text-brand-primary relative z-10" />
                    </div>
                    <div className="inline-block bg-brand-primary text-galaxy-100 font-bold px-4 py-1 rounded-full text-sm shadow-[0_0_20px_rgba(204,255,0,0.4)]">
                        ONE STRATEGY
                    </div>
                </div>

                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(204,255,0,0.8)] z-10 mt-6" />

                        <div className="ml-20 md:ml-0 md:w-1/2 p-6 md:p-8 rounded-2xl bg-galaxy-200 border border-white/5 hover:border-brand-primary/30 transition-colors">
                            <span className="text-brand-primary font-bold text-lg mb-2 block">0{i + 1}.</span>
                            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {feature.subtitle}
                            </p>
                            <div className="pl-4 border-l-2 border-brand-primary/50">
                                <p className="text-sm text-gray-300">
                                    <span className="text-brand-primary font-medium">What you get:</span> {feature.result}
                                </p>
                            </div>
                        </div>
                        <div className="hidden md:block md:w-1/2" />
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 text-center bg-galaxy-200 p-8 rounded-2xl border border-white/5 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">The Bottom Line</h3>
                <p className="text-gray-400">
                    When everything comes from one team, nothing falls through the cracks. No miscommunication. Just one integrated system designed to bring you customers.
                </p>
            </div>
        </Section>
    );
};

export default Integration;
