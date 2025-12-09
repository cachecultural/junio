import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Section = ({
    children,
    className,
    id,
    fullWidth = false,
    background = 'transparent'
}) => {
    return (
        <section
            id={id}
            className={twMerge(
                "py-20 md:py-32 relative overflow-hidden",
                background === 'dark' && "bg-galaxy-200/90 backdrop-blur-sm",
                background === 'darker' && "bg-galaxy-100/90 backdrop-blur-sm",
                background === 'glass' && "bg-galaxy-200/30 backdrop-blur-md border-y border-white/5",
                className
            )}
        >
            <div className={twMerge(
                "container mx-auto px-4 md:px-6 relative z-10",
                fullWidth ? "max-w-none" : "max-w-7xl"
            )}>
                {children}
            </div>
        </section>
    );
};

export default Section;
