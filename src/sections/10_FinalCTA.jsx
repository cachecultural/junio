import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const FinalCTA = () => {
    return (
        <Section id="contact" className="bg-gradient-to-t from-galaxy-100 to-galaxy-200 py-32 text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                    You've Built a Real Business. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                        Let's Make Sure Everyone Knows It.
                    </span>
                </h2>

                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    You're past the startup phase. You have a proven model. Stop losing deals to competitors who just <em>look</em> better. <br className="hidden md:block" />
                    Let's turn your marketing into the growth engine you deserve.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <Button variant="primary" className="text-lg px-12 py-5 shadow-[0_0_50px_rgba(204,255,0,0.4)]">
                        Book Your Free Growth Session
                    </Button>
                    <p className="text-sm text-gray-500">
                        30 minutes. Free. We'll tell you what to fix first—even if you don't hire us.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default FinalCTA;
