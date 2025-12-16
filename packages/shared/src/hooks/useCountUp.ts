import { useEffect, useState } from "react";

export function useCountUp(value: number, duration = 1200) {
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;

        const increment = end / (duration / 16); // 60fps → ~16ms/frame

        let current = start;

        const animate = () => {
            current += increment;

            if (current < end) {
                setDisplay(Math.floor(current));
                requestAnimationFrame(animate);
            } else {
                setDisplay(end);
            }
        };

        requestAnimationFrame(animate);
    }, [value, duration]);

    return display.toLocaleString();
}
