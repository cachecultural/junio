import React, { useState } from 'react';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-start justify-between text-left hover:text-brand-primary transition-colors gap-4"
            >
                <span className="text-lg font-medium text-white">{question}</span>
                <span className={`shrink-0 text-brand-primary mt-1 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 text-gray-400 leading-relaxed space-y-4">
                            {answer.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Is this actually going to be worth the investment?",
            answer: [
                "If you're doing $500K+ in revenue but your marketing looks amateur, you're leaving money on the table. Our Moon plan ($160/month) gives you a high-converting website that actually closes deals.",
                "If that captures even ONE extra client per month, it's paid for itself 10x over. Most businesses waste $2K-$5K/month on random tactics. We give you an integrated system for a fraction of that.",
                "Plus: You don't pay a dime until after we've audited your business."
            ]
        },
        {
            question: "We're already trying some marketing. Should we stop and start over?",
            answer: [
                "Depends on what's working. If your current efforts are bringing qualified leads and tracking ROI... keep doing that. We'll plug into what's working.",
                "But if you're posting just because 'you're supposed to', running ads you can't track, or paying someone with no results... that needs to change. We start with a complete audit to tell you exactly what's good and what's burning money."
            ]
        },
        {
            question: "How do I know you're not just another agency making promises?",
            answer: [
                "Three reasons: 1) You don't pay until you're confident in the plan. 2) We only work with proven businesses ($500K+ revenue). 3) You work directly with the team doing the work.",
                "No mystery pricing. No hard sell. Just honest assessment."
            ]
        },
        {
            question: "We don't have time to manage another vendor.",
            answer: [
                "That's the point. Most businesses juggle 5 vendors. With us, it's one team. Website, ads, content, automation—all connected.",
                "Time commitment: About 3 hours total across 2-3 calls. We ask, you answer, we build."
            ]
        },
        {
            question: "What if we're not ready to go all-in yet?",
            answer: [
                "Start with Moon ($160/month). Fix your website and get the AI sales chatbot. See the results.",
                "Most clients upgrade later, but some stay there forever. Don't keep limping along with a DIY site that's losing you deals."
            ]
        }
    ];

    return (
        <Section id="faq" background="transparent" client:visible>
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                    What Business Owners Ask <span className="text-brand-primary">Before They Commit</span>
                </h2>
                <div>
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} {...faq} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
