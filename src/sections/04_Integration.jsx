import React, { useState } from 'react';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        if (currentIndex < features.length - 1) {
            setDirection(1);
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex(currentIndex - 1);
        }
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    return (
        <Section id="integration" background="glass" className="overflow-hidden">
            <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Five Services. One Strategy. <br />
                    <span className="text-brand-primary">That's The Difference.</span>
                </h2>
                <p className="text-xl text-gray-400">
                    Here's what happens when the same team builds everything:
                </p>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-4xl mx-auto">
                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center transition-all hover:bg-brand-primary hover:scale-110 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed hover:scale-100 hover:bg-brand-primary/10' : ''
                        }`}
                    aria-label="Previous"
                >
                    <ChevronLeft className="text-brand-primary" />
                </button>

                <button
                    onClick={handleNext}
                    disabled={currentIndex === features.length - 1}
                    className={`absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center transition-all hover:bg-brand-primary hover:scale-110 ${currentIndex === features.length - 1 ? 'opacity-30 cursor-not-allowed hover:scale-100 hover:bg-brand-primary/10' : ''
                        }`}
                    aria-label="Next"
                >
                    <ChevronRight className="text-brand-primary" />
                </button>

                {/* Card Container with AnimatePresence */}
                <div className="relative min-h-[400px] flex items-center justify-center px-14 md:px-0">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.3 }
                            }}
                            className="w-full"
                        >
                            <div className="p-8 md:p-10 rounded-2xl bg-galaxy-200 border border-white/5 hover:border-brand-primary/30 transition-colors">
                                <span className="text-brand-primary font-bold text-2xl mb-4 block">0{currentIndex + 1}.</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{features[currentIndex].title}</h3>
                                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                    {features[currentIndex].subtitle}
                                </p>
                                <div className="pl-6 border-l-4 border-brand-primary/50">
                                    <p className="text-base text-gray-300">
                                        <span className="text-brand-primary font-medium">What you get:</span> {features[currentIndex].result}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center items-center gap-2 mt-8">
                    {features.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`transition-all ${index === currentIndex
                                    ? 'w-8 h-3 bg-brand-primary rounded-full'
                                    : 'w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-500'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Counter */}
                <div className="text-center mt-4 text-gray-500 text-sm">
                    {currentIndex + 1} / {features.length}
                </div>
            </div>

            {/* Bottom Line Section */}
            <div className="mt-16 text-center bg-galaxy-200 p-8 rounded-2xl border border-white/5 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">The Bottom Line</h3>
                <p className="text-gray-400">
                    When everything comes from one team, nothing falls through the cracks. No miscommunication. Just one integrated system designed to bring you customers.
                </p>
            </div>
        </Section>
    );
};

export default Integration;
