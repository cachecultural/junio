import React, { useRef, useEffect, useState } from 'react';

const Starfield = ({ speed = 0.5, backgroundColor = "transparent", count = 800 }) => {
    const canvasRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile on mount
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.matchMedia('(max-width: 768px)').matches;
            setIsMobile(mobile);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Adjusted weights: mostly white/gray, fewer green
    const colors = [
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", // 6 Whites
        "#a0a0b0", "#a0a0b0", // 2 Grays
        "#ccff00", // 1 Neon Green
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];

        // Mobile optimization: reduce particle count drastically
        const effectiveCount = isMobile ? 200 : count;
        const effectiveSpeed = isMobile ? speed * 0.7 : speed;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            // Depth represents "layers" away from camera. 
            // 1 = close (fast, clear), 10 = far (slow, blurry)
            for (let i = 0; i < effectiveCount; i++) {
                const color = colors[Math.floor(Math.random() * colors.length)];
                const isGreen = color === "#ccff00" || color === "#9eff00";
                const isWhite = color === "#ffffff";

                // Random depth z from 1 to 5
                const z = Math.random() * 4 + 1;

                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: z, // Depth factor
                    color: color,
                    // Green stars get significantly lower base opacity
                    maxOpacity: isGreen ? 0.39 : (Math.random() * 0.5 + 0.5),
                    // Only some white stars blink
                    blinkOffset: isWhite && Math.random() > 0.7 ? Math.random() * Math.PI * 2 : null,
                    blinkSpeed: Math.random() * 0.05 + 0.02
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const time = Date.now();

            stars.forEach(star => {
                // Move UP (y - speed)
                // Speed inversely proportional to depth (closer = faster)
                const currentSpeed = effectiveSpeed * (3 / star.z);
                star.y -= currentSpeed;

                // Reset if off top of screen
                if (star.y < -10) {
                    star.y = canvas.height + 10;
                    star.x = Math.random() * canvas.width;
                }

                const size = Math.max(0.5, 3.5 / star.z); // Closer = bigger
                let alpha = star.maxOpacity;

                // Twinkle effect
                if (star.blinkOffset !== null) {
                    const twinkle = (Math.sin(time * 0.003 + star.blinkOffset) + 1) / 2;
                    alpha *= (0.5 + twinkle * 0.5);
                }

                // MOBILE OPTIMIZATION: Skip expensive blur filters on mobile
                // Use opacity-based depth instead
                if (!isMobile) {
                    // Desktop: Apply blur for depth (expensive but beautiful)
                    const blurAmount = Math.max(0, (star.z - 2));
                    ctx.filter = `blur(${blurAmount}px)`;
                }

                ctx.beginPath();
                ctx.fillStyle = star.color;

                // Fade out distant stars (more aggressive on mobile for performance)
                const depthFade = isMobile ? (1 / star.z) : (1 / (star.z * 0.5));
                ctx.globalAlpha = alpha * depthFade;

                ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
                ctx.fill();

                // Reset filters
                if (!isMobile) {
                    ctx.filter = 'none';
                }
                ctx.globalAlpha = 1.0;
            });

            animationFrameId = window.requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [speed, backgroundColor, count, isMobile]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: backgroundColor }}
        />
    );
};

export default Starfield;
