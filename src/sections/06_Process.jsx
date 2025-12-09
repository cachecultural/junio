import React from 'react';
import Section from '../components/Section';

const steps = [
    {
        weeks: "Week 1-2",
        title: "We Figure Out What's Costing You Money",
        desc: "We audit everything. We show you exactly where leads are leaking and what's leaving money on the table.",
        get: "A clear diagnosis. No guessing."
    },
    {
        weeks: "Week 3-4",
        title: "We Clarify What Makes You Worth Paying For",
        desc: "We refine your positioning, sharpen your offers, and create the messaging that makes buying easy.",
        get: "Crystal-clear positioning."
    },
    {
        weeks: "Week 5-10",
        title: "We Build Everything",
        desc: "New website. Ad campaigns. Content systems. Automation. Nothing launches until you're confident.",
        get: "A complete digital presence that looks like a real business."
    },
    {
        weeks: "Week 11-12",
        title: "We Launch and Watch What Happens",
        desc: "Everything goes live. We monitor every metric and optimize based on real data.",
        get: "Real numbers. You'll know exactly what's working."
    },
    {
        weeks: "Month 4+",
        title: "We Keep It Running (If You Want)",
        desc: "Some clients want us to stay on as their external marketing team. Others take it in-house.",
        get: "Options. We scale with you or hand it off."
    }
];

const Process = () => {
    return (
        <Section id="process" background="transparent">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    From "We Need to Fix Our Marketing" <br />
                    <span className="text-brand-primary">To "We're Booked Out Three Weeks"</span>
                </h2>
                <p className="text-xl text-gray-400">
                    Here's what the next 90 days look like:
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                {steps.map((step, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 p-6 rounded-xl hover:bg-white/5 transition-colors border-b border-white/5 md:border-b-0">
                        <div className="md:w-32 shrink-0">
                            <span className="inline-block px-3 py-1 rounded bg-brand-primary/10 text-brand-primary text-sm font-bold">
                                {step.weeks}
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-400 mb-3">{step.desc}</p>
                            <p className="text-sm font-medium text-brand-secondary">
                                What you get: <span className="text-gray-400 font-normal">{step.get}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12 bg-galaxy-100 p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Let's Talk About Your Timeline</h3>
                <p className="text-gray-400 mb-6">
                    Book a free 30-minute call. We'll look at your business and tell you exactly what we'd build and how long it would take.
                </p>
                <button className="bg-white text-galaxy-100 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
                    Book Availability Check
                </button>
            </div>
        </Section>
    );
};

export default Process;
