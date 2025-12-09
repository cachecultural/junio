import React from 'react';
import Section from '../components/Section';
import { Monitor, TrendingUp, PenTool, Bot } from 'lucide-react';
// import iconsAnimation from '../assets/cycling-social-icons.json';
import Lottie from 'lottie-react';

const Card = ({ icon, title, description }) => (
    <div className="bg-galaxy-300 p-8 rounded-2xl border border-white/5 hover:border-brand-primary/50 transition-all duration-300 group hover:-translate-y-2">
        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-primary group-hover:text-galaxy-100 overflow-hidden">
            {/* If icon is a component (Lucide), render it. If it's a Lottie element (React Node), render it directly */}
            {React.isValidElement(icon) ? icon : <icon size={28} />}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <div className="space-y-4 text-gray-400">
            {description.map((text, i) => (
                <p key={i}>{text}</p>
            ))}
        </div>
    </div>
);

const Solution = () => {
    const services = [
        {
            icon: <Monitor size={28} />,
            title: "Website that brings customers",
            description: [
                "Fast, professional, and designed to turn visitors into paying clients.",
                "Not just some template on Squarespace."
            ]
        },
        {
            icon: <TrendingUp size={28} />,
            title: "Ads that pay for themselves",
            description: [
                "We create and run campaigns that bring qualified leads.",
                "You'll know exactly what you spent and what you got."
            ]
        },
        {
            icon: <PenTool size={28} />,
            title: "Content that positions you",
            description: [
                "We shoot, edit, and post. You look like a market leader...",
                "because you are."
            ]
        },
        {
            icon: <Bot size={28} />,
            title: "Systems that work when you don't",
            description: [
                "AI chatbots answer questions 24/7.",
                "Automated follow-ups and appointment booking without your assistant."
            ]
        }
    ];

    return (
        <Section id="services" background="glass">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    We Make You Look Like The Business <span className="text-brand-primary">You Already Are</span>
                </h2>
                <p className="text-xl text-gray-400">
                    You've proven your business works. Now let's prove it online.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <Card key={index} {...service} />
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    One team handles all of it. Everything works together because the same people built it. <br />
                    <span className="font-bold text-white">You run your business. We make sure the world sees how good it actually is.</span>
                </p>
            </div>
        </Section>
    );
};

export default Solution;
