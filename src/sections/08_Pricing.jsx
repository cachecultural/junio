import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, description, features, recommended = false, target, impact }) => {
    return (
        <div className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full ${recommended
            ? 'bg-galaxy-200 border-brand-primary shadow-[0_0_40px_rgba(204,255,0,0.1)] scale-100 md:scale-105 z-10'
            : 'bg-galaxy-100 border-white/10 hover:border-white/20'
            }`}>
            {recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-galaxy-100 font-bold px-4 py-1 rounded-full text-xs tracking-wider">
                    MOST POPULAR
                </div>
            )}

            <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">${price}</span>
                    <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 text-sm mt-4 min-h-[40px]">{description}</p>
            </div>

            <div className="flex-grow space-y-4 mb-8">
                {features.map((feature, i) => (
                    <div key={i} className="flex gap-3 text-sm">
                        <Check size={18} className="text-brand-primary shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                    </div>
                ))}
            </div>

            <div className="space-y-4 mt-auto">
                <div className="p-4 rounded-lg bg-white/5 text-xs text-gray-400">
                    <p className="mb-2"><strong className="text-white">Who:</strong> {target}</p>
                    <p><strong className="text-white">Impact:</strong> {impact}</p>
                </div>
                <Button variant={recommended ? 'primary' : 'secondary'} className="w-full py-3 text-sm">
                    Choose {title}
                </Button>
            </div>
        </div>
    );
};

const Pricing = () => {
    const plans = [
        {
            title: "Moon",
            price: 160,
            description: "Stop Losing Deals to Your Amateur-Looking Website",
            features: [
                "Custom-built, high-converting website",
                "24/7 AI chatbot & sales support",
                "Ongoing maintenance & updates",
                "Mobile-perfect optimization"
            ],
            target: "Businesses that need to stop apologizing for their website.",
            impact: "Premium clients stop bouncing. Your site finally matches your quality."
        },
        {
            title: "Star",
            price: 340,
            recommended: true,
            description: "When Your Website's Great But Your Social Media is Random",
            features: [
                "Everything in Moon",
                "Consistent professional social content",
                "Done-for-you creative (video/static)",
                "One unified message across platforms"
            ],
            target: "Businesses competing against 'more professional looking' rivals.",
            impact: "Prospects see polish and consistency everywhere they look."
        },
        {
            title: "Nebula",
            price: 970,
            description: "Your Complete Growth Engine",
            features: [
                "Everything in Star",
                "Ads that pay for themselves",
                "Full video/creative ad production",
                "Advanced AI automation & follow-ups",
                "Priority access to entire team"
            ],
            target: "Businesses ready to scale beyond word-of-mouth.",
            impact: "Marketing becomes a predictable growth engine, not a headache."
        }
    ];

    return (
        <Section id="pricing" background="glass" className="overflow-visible">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Choose Your Growth Speed
                </h2>
                <p className="text-xl text-gray-400">
                    All plans provide senior-level creative for less than one junior hire.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto items-start">
                {plans.map((plan, i) => (
                    <PricingCard key={i} {...plan} />
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-gray-400 mb-4">Not Sure Which Plan Fits?</p>
                <a href="#contact" className="text-brand-primary underline hover:text-white transition-colors">
                    Book a free growth session →
                </a>
            </div>
        </Section>
    );
};

export default Pricing;
