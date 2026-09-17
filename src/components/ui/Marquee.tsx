import type { ReactNode } from "react";

type MarqueeProps = {
    children: ReactNode;
    speed?: number;               // detik untuk 1x putaran penuh
    direction?: "left" | "right";
    gapClassName?: string;        // class gap Tailwind, default "gap-14"
    ariaLabel?: string;
};

function Marquee({ children, speed = 40, direction = "left", gapClassName = "gap-14", ariaLabel }: MarqueeProps) {
    const animationClass = direction === "left" ? "animate-marquee-rtl" : "animate-marquee-ltr";

    return (
        <div className="relative overflow-hidden mask-fade-x">
            <div
                className={`flex items-center w-max ${gapClassName} ${animationClass}`}
                style={{ animationDuration: `${speed}s` }}
                role="list"
                aria-label={ariaLabel}
            >
                <div className={`flex items-center shrink-0 ${gapClassName}`}>
                    {children}
                </div>
                <div className={`flex items-center shrink-0 ${gapClassName}`} aria-hidden="true">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Marquee;