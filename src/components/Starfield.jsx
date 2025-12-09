import React, { useRef, useEffect } from 'react';

const Starfield = ({ speed = 0.5, backgroundColor = "transparent", count = 800 }) => {
    const canvasRef = useRef(null);

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

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            // Depth represents "layers" away from camera. 
            // 1 = close (fast, clear), 10 = far (slow, blurry)
            for (let i = 0; i < count; i++) {
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
                const currentSpeed = speed * (3 / star.z);
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

                // Apply blur for depth
                // Far stars (high Z) get more blur
                // Be careful with performance: switching ctx.filter frequently is heavy.
                // Optimization: Draw is batched by blur ideally, but for 800 stars finding a balance.
                // Or opacity fade for depth instead of Gaussian blur for performance?
                // User requested blur. Canvas filter is the way.

                const blurAmount = Math.max(0, (star.z - 2));
                ctx.filter = `blur(${blurAmount}px)`;

                ctx.beginPath();
                ctx.fillStyle = star.color;

                // Fade out distant stars
                ctx.globalAlpha = alpha * (1 / (star.z * 0.5));

                ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
                ctx.fill();

                ctx.filter = 'none'; // Reset filter
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
    }, [speed, backgroundColor, count]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: backgroundColor }}
        />
    );
};

export default Starfield;
