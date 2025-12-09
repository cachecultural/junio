import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    className,
    onClick,
    href,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-bold transition-all duration-300 rounded-full tracking-wide";

    const variants = {
        primary: "bg-brand-primary text-galaxy-100 hover:bg-white hover:shadow-[0_0_20px_rgba(204,255,0,0.6)]",
        secondary: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-galaxy-100",
        link: "text-brand-primary hover:text-white p-0 bg-transparent underline-offset-4 hover:underline"
    };

    const Component = href ? 'a' : motion.button;
    const content = (
        <>
            {children}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={twMerge(baseStyles, variants[variant], className)}
                {...props}
            >
                {content}
            </a>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={twMerge(baseStyles, variants[variant], className)}
            onClick={onClick}
            {...props}
        >
            {content}
        </motion.button>
    );
};

export default Button;
